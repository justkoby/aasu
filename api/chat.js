import Groq from "groq-sdk";
import { createClient } from "@supabase/supabase-js";
import searchData from "../src/data/searchData.js";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : null;

// Search static pages and navigation paths
function searchStaticWebsite(query) {
  if (!query) return [];
  const cleanQuery = query.toLowerCase().replace(/[^\w\s]/g, "");
  const words = cleanQuery.split(/\s+/).filter(word => word.length > 2);
  
  const stopWords = new Set([
    "how", "can", "get", "the", "and", "for", "are", "you", "who", "what",
    "when", "where", "why", "with", "from", "this", "that", "your", "does",
    "become", "about", "aasu", "union", "student", "students", "africa"
  ]);
  
  const searchTokens = words.filter(w => !stopWords.has(w));
  const tokensToUse = searchTokens.length > 0 ? searchTokens : words;
  if (tokensToUse.length === 0) return [];

  const scored = searchData.map(item => {
    let score = 0;
    const titleLower = item.title.toLowerCase();
    const descLower = item.description.toLowerCase();
    const queryLower = query.toLowerCase();
    
    if (titleLower.includes(queryLower)) score += 40;
    if (descLower.includes(queryLower)) score += 20;
    
    tokensToUse.forEach(token => {
      if (titleLower.includes(token)) score += 15;
      if (descLower.includes(token)) score += 8;
      if (item.keywords) {
        item.keywords.forEach(kw => {
          if (kw.toLowerCase().includes(token)) score += 10;
        });
      }
    });
    
    return { item, score };
  });
  
  return scored
    .filter(res => res.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(res => res.item)
    .slice(0, 5);
}

// Search dynamic published posts from Supabase
async function searchSupabasePosts(query) {
  if (!supabase || !query || !query.trim()) return [];

  const now = new Date().toISOString();
  const cleanQuery = query.trim();

  try {
    const { data, error } = await supabase
      .from("posts")
      .select("title, slug, excerpt, type, published_at, redirect_url")
      .eq("status", "published")
      .not("published_at", "is", null)
      .lte("published_at", now)
      .or(`title.ilike.%${cleanQuery}%,excerpt.ilike.%${cleanQuery}%,content.ilike.%${cleanQuery}%`)
      .order("published_at", { ascending: false })
      .limit(5);

    if (error) {
      console.warn("[AASU Chat API] Supabase search error:", error.message);
      return [];
    }

    return (data || []).map(post => ({
      title: post.title,
      type: (post.type || "NEWS").toUpperCase(),
      description: post.excerpt || "",
      path: post.redirect_url || `/news/${post.slug}`,
      fullUrl: `https://aasuonline.org/news/${post.slug}`,
      date: post.published_at ? new Date(post.published_at).toLocaleDateString("en-GB") : ""
    }));
  } catch (err) {
    console.error("[AASU Chat API] Exception in Supabase query:", err);
    return [];
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const staticResults = searchStaticWebsite(message);
    const dynamicResults = await searchSupabasePosts(message);
    
    let context = "";
    const totalResults = [...dynamicResults, ...staticResults];

    if (totalResults.length > 0) {
      context = "Here are the most relevant published content items and pages found on the AASU website for the user's query:\n\n" + 
        totalResults.map((res, index) => {
          return `[Result ${index + 1}]
Title: ${res.title}
Type/Category: ${res.type || res.category || 'General'}
Description: ${res.description}
Path: ${res.path}
Date: ${res.date || 'N/A'}`;
        }).join("\n\n");
    } else {
      context = "No direct matching pages or news articles found. Provide general information based on your knowledge of AASU.";
    }

    const systemPrompt = `You are the official AASU navigation assistant and website guide.

Your goals:
- Guide users to the correct page on the All-Africa Students Union (AASU) website.
- Answer questions about news, events, statements, programs (like YLC / Youth Leadership Cohort, NELS, Digital Inclusion / #DataMustFall), leadership/executives, membership, and contact details.
- Provide direct links to relevant pages using the paths provided in the search results context.

CRITICAL LINK RULES:
1. When recommending or mentioning a page, person, program, or news story that exists in the search results context, you MUST link to it using the exact relative path provided, e.g. [Become a Member](/become-a-member), [Contact Us](/contact), or [Read Statement](/news/slug-here).
2. ONLY use the paths exactly as they are given in the search results. DO NOT invent paths or guess links. If the path is "#" or not available, do not create a link for it.
3. If no matching pages are found in the context, do not make up a link.
4. Format all links as standard markdown: [Link Text](Path).

Context:
${context}

Additional Information about AASU:
- Secretariat location: Osu, Accra, Ghana.
- Contact email: info@aasuonline.org.
- Leadership: Osisiogu Osikenyi Enyinnaya (President, Nigeria), Divine Edem Kwadzodeh (Secretary General, Ghana) for the 2026-2029 term.

Answer the user's question professionally, warmly, and helpfully. Always prioritize the matching pages in the Context to direct the user.`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    res.json({
      reply: completion.choices[0].message.content
    });
  } catch (error) {
    console.error("Error in API handler:", error);
    res.status(500).json({ error: "Failed to fetch response from Groq assistant." });
  }
}
