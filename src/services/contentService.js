import { supabase } from "../lib/supabaseClient"
import { mapPostToPublicShape } from "../utils/mapPostData"

const getNowIso = () => new Date().toISOString()

/**
 * Base helper to apply public safety filters to any Supabase posts query.
 * Enforces:
 * - status = 'published'
 * - published_at is not null
 * - published_at <= NOW()
 */
function applyPublicFilters(query, now = getNowIso()) {
  return query
    .eq("status", "published")
    .not("published_at", "is", null)
    .lte("published_at", now)
}

/**
 * Fetch published posts with optional pagination and filtering by type, category, region, theme.
 */
export async function getPublishedPosts(options = {}) {
  if (!supabase) return { data: null, error: new Error("Supabase client uninitialized") }

  const { limit, type, category, region, theme, page = 1 } = options
  const now = getNowIso()

  try {
    let query = supabase
      .from("posts")
      .select("*, post_categories(categories(name))")

    query = applyPublicFilters(query, now)
      .order("published_at", { ascending: false })
      .order("created_at", { ascending: false })

    if (type) {
      if (Array.isArray(type)) {
        query = query.in("type", type)
      } else if (type !== "all") {
        query = query.eq("type", type)
      }
    }

    if (region && region !== "all" && region !== "All") {
      query = query.eq("regional_focus", region)
    }

    if (theme && theme !== "all" && theme !== "All") {
      query = query.or(`thematic_focus.eq.${theme},press_release_category.eq.${theme}`)
    }

    if (limit) {
      const fromIndex = (page - 1) * limit
      const toIndex = fromIndex + limit - 1
      query = query.range(fromIndex, toIndex)
    }

    const { data, error } = await query

    if (error) throw error

    let mapped = (data || []).map(mapPostToPublicShape)

    if (category && category !== "all" && category !== "All") {
      mapped = mapped.filter(p =>
        p.categories && p.categories.some(c => c.toLowerCase() === category.toLowerCase())
      )
    }

    return { data: mapped, error: null }
  } catch (err) {
    console.error("[AASU ContentService] getPublishedPosts error:", err)
    return { data: null, error: err }
  }
}

/**
 * Fetch a single published post by slug or UUID.
 */
export async function getPublishedPostBySlug(slugOrId) {
  if (!supabase) return { data: null, error: new Error("Supabase client uninitialized") }

  const now = getNowIso()

  try {
    let query = supabase
      .from("posts")
      .select("*, post_categories(categories(name))")

    query = applyPublicFilters(query, now)

    const isUuid = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(slugOrId)

    if (isUuid) {
      query = query.or(`slug.eq.${slugOrId},id.eq.${slugOrId}`)
    } else {
      query = query.eq("slug", slugOrId)
    }

    const { data, error } = await query.maybeSingle()

    if (error) throw error
    if (!data) return { data: null, error: null }

    return { data: mapPostToPublicShape(data), error: null }
  } catch (err) {
    console.error("[AASU ContentService] getPublishedPostBySlug error:", err)
    return { data: null, error: err }
  }
}

/**
 * Fetch latest news posts.
 */
export async function getLatestNews(limit = 3) {
  return getPublishedPosts({ limit, type: "news" })
}

/**
 * Fetch published event posts (upcoming and past).
 */
export async function getPublishedEvents(options = {}) {
  return getPublishedPosts({ ...options, type: "event" })
}

/**
 * Fetch published press release and readout posts.
 */
export async function getPublishedPressReleases(options = {}) {
  const { year, category, page, limit } = options
  const result = await getPublishedPosts({
    type: ["press_release", "readout"],
    category,
    page,
    limit: limit || 100
  })

  if (result.error || !result.data) return result

  let filtered = result.data

  if (year && year !== "All") {
    filtered = filtered.filter(item => {
      const itemYear = new Date(item.published_at || item.raw_date).getFullYear().toString()
      return itemYear === year
    })
  }

  if (category && category !== "All") {
    filtered = filtered.filter(item => {
      const prCat = item.pressReleaseCategory || ""
      const mainCat = item.category || ""
      return prCat.toLowerCase() === category.toLowerCase() || mainCat.toLowerCase() === category.toLowerCase()
    })
  }

  return { data: filtered, error: null }
}

/**
 * Fetch climate and environment posts using thematic_focus and categories.
 */
export async function getClimatePosts(limit = 3) {
  if (!supabase) return { data: null, error: new Error("Supabase client uninitialized") }

  const now = getNowIso()

  try {
    let query = supabase
      .from("posts")
      .select("*, post_categories(categories(name))")

    query = applyPublicFilters(query, now)
      .order("published_at", { ascending: false })
      .limit(20)

    const { data, error } = await query
    if (error) throw error

    let mapped = (data || []).map(mapPostToPublicShape)

    // Filter by climate/environment thematic focus or category or keywords
    const filtered = mapped.filter(item => {
      const theme = (item.thematicFocus || "").toLowerCase()
      const cats = (item.categories || []).map(c => c.toLowerCase()).join(" ")
      const title = (item.title || "").toLowerCase()
      return (
        theme.includes("climate") ||
        theme.includes("environment") ||
        theme.includes("sustainability") ||
        cats.includes("climate") ||
        cats.includes("environment") ||
        cats.includes("sustainability") ||
        title.includes("climate") ||
        title.includes("greening") ||
        title.includes("sustainability") ||
        title.includes("environment")
      )
    }).slice(0, limit)

    return { data: filtered, error: null }
  } catch (err) {
    console.error("[AASU ContentService] getClimatePosts error:", err)
    return { data: null, error: err }
  }
}

/**
 * Fetch Homepage Hero Slides following prioritization rules:
 * 1. Active published primary hero post (hero_position = 'primary')
 * 2. Active published secondary hero posts (hero_position = 'secondary')
 * 3. Fill empty slide positions with latest published posts that have featured images
 * Rules:
 * - Exclude expired featured_until records (featured_until is null or >= NOW)
 * - Maximum 4 slides
 * - Prevent duplicate slides
 */
export async function getHeroPosts() {
  if (!supabase) return { data: null, error: new Error("Supabase client uninitialized") }

  const now = getNowIso()

  try {
    // Query 1: Manually assigned hero posts (primary or secondary)
    let heroQuery = supabase
      .from("posts")
      .select("*, post_categories(categories(name))")
      .neq("hero_position", "none")
      .or(`featured_until.is.null,featured_until.gte.${now}`)

    heroQuery = applyPublicFilters(heroQuery, now)
      .order("hero_position", { ascending: true }) // primary before secondary
      .order("published_at", { ascending: false })

    const { data: heroData, error: heroErr } = await heroQuery
    if (heroErr) throw heroErr

    let mappedHero = (heroData || []).map(mapPostToPublicShape)

    const slides = []
    const seenIds = new Set()

    for (const item of mappedHero) {
      if (!seenIds.has(item.id) && slides.length < 4) {
        slides.push(item)
        seenIds.add(item.id)
      }
    }

    // Fill remaining positions (up to 4) with latest published posts with featured images
    if (slides.length < 4) {
      let fillQuery = supabase
        .from("posts")
        .select("*, post_categories(categories(name))")
        .not("featured_image_url", "is", null)

      fillQuery = applyPublicFilters(fillQuery, now)
        .order("published_at", { ascending: false })
        .limit(10)

      const { data: fillData, error: fillErr } = await fillQuery
      if (!fillErr && fillData) {
        const mappedFill = fillData.map(mapPostToPublicShape)
        for (const item of mappedFill) {
          if (!seenIds.has(item.id) && slides.length < 4) {
            slides.push(item)
            seenIds.add(item.id)
          }
        }
      }
    }

    return { data: slides, error: null }
  } catch (err) {
    console.error("[AASU ContentService] getHeroPosts error:", err)
    return { data: null, error: err }
  }
}

/**
 * Perform server-side search across published public content only.
 * Searches across: title, excerpt, content, reference_number, thematic_focus, regional_focus.
 */
export async function searchPublishedPosts(queryText, filters = {}) {
  if (!supabase) return { data: null, error: new Error("Supabase client uninitialized") }

  const now = getNowIso()
  const cleanQuery = (queryText || "").trim()

  try {
    let query = supabase
      .from("posts")
      .select("*, post_categories(categories(name))")

    query = applyPublicFilters(query, now)
      .order("published_at", { ascending: false })

    if (cleanQuery) {
      query = query.or(
        `title.ilike.%${cleanQuery}%,excerpt.ilike.%${cleanQuery}%,content.ilike.%${cleanQuery}%,reference_number.ilike.%${cleanQuery}%,event_location.ilike.%${cleanQuery}%`
      )
    }

    if (filters.type && filters.type !== "All" && filters.type !== "all") {
      query = query.eq("type", filters.type.toLowerCase())
    }

    const { data, error } = await query

    if (error) throw error

    let mapped = (data || []).map(mapPostToPublicShape)

    if (filters.category && filters.category !== "All" && filters.category !== "all") {
      mapped = mapped.filter(p =>
        p.categories && p.categories.some(c => c.toLowerCase() === filters.category.toLowerCase())
      )
    }

    if (filters.year && filters.year !== "All") {
      mapped = mapped.filter(p => {
        const pYear = new Date(p.published_at || p.raw_date).getFullYear().toString()
        return pYear === filters.year
      })
    }

    return { data: mapped, error: null }
  } catch (err) {
    console.error("[AASU ContentService] searchPublishedPosts error:", err)
    return { data: null, error: err }
  }
}
