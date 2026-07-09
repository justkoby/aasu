import Groq from "groq-sdk";
import searchData from "../src/data/searchData.js";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// A simple keyword-based matching function for search
function searchWebsite(query) {
  if (!query) return [];
  
  // Clean the query and split into words
  const cleanQuery = query.toLowerCase().replace(/[^\w\s]/g, "");
  const words = cleanQuery.split(/\s+/).filter(word => word.length > 2);
  
  // Basic list of stop words to filter out
  const stopWords = new Set([
    "how", "can", "get", "the", "and", "for", "are", "you", "who", "what",
    "when", "where", "why", "with", "from", "this", "that", "your", "does",
    "become", "about", "aasu", "union", "student", "students", "africa"
  ]);
  
  const searchTokens = words.filter(w => !stopWords.has(w));
  
  // If no search tokens remain, fall back to the whole word list
  const tokensToUse = searchTokens.length > 0 ? searchTokens : words;
  if (tokensToUse.length === 0) return [];

  const scored = searchData.map(item => {
    let score = 0;
    
    // Check if the exact query or phrase is in title or description
    const titleLower = item.title.toLowerCase();
    const descLower = item.description.toLowerCase();
    const queryLower = query.toLowerCase();
    
    if (titleLower.includes(queryLower)) score += 40;
    if (descLower.includes(queryLower)) score += 20;
    
    // Score based on token matches
    tokensToUse.forEach(token => {
      // Title match
      if (titleLower.includes(token)) {
        score += 15;
        // Exact word match in title
        if (titleLower.split(/\s+/).includes(token)) {
          score += 15;
        }
      }
      
      // Description match
      if (descLower.includes(token)) {
        score += 8;
      }
      
      // Keywords match
      if (item.keywords) {
        item.keywords.forEach(kw => {
          const kwLower = kw.toLowerCase();
          if (kwLower.includes(token)) {
            score += 10;
            if (kwLower === token) {
              score += 15; // Exact keyword match
            }
          }
        });
      }
    });
    
    return { item, score };
  });
  
  // Sort by score descending and take the top results with score > 0
  return scored
    .filter(res => res.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(res => res.item)
    .slice(0, 10); // return top 10 matches
}

export default async function handler(req, res) {
  // Check request method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const searchResults = searchWebsite(message);
    
    let context = "";
    if (searchResults.length > 0) {
      context = "Here are the most relevant pages and sections found on the AASU website for the user's query:\n\n" + 
        searchResults.map((res, index) => {
          return `[Result ${index + 1}]
Title: ${res.title}
Category: ${res.category}
Description: ${res.description}
Path: ${res.path}
Keywords: ${res.keywords ? res.keywords.join(", ") : ""}`;
        }).join("\n\n");
    } else {
      context = "No direct matching pages found on the website. Provide general information based on your knowledge of AASU.";
    }

    const systemPrompt = `You are the official AASU navigation assistant and website guide.

Your goals:
- Guide users to the correct page on the All-Africa Students Union (AASU) website.
- Answer questions about events, programs (like YLC / Youth Leadership Cohort, NELS, Digital Inclusion / #DataMustFall), leadership/executives, membership, and contact details.
- Provide direct links to relevant pages using the paths provided in the search results context.

CRITICAL LINK RULES:
1. When recommending or mentioning a page, person, program, or form that exists in the search results context, you MUST link to it using the exact relative path provided, e.g. [Become a Member](/become-a-member) or [Contact Us](/contact).
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
