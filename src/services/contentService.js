import { supabase } from "../lib/supabaseClient"
import { mapPostToPublicShape } from "../utils/mapPostData"

const getNowIso = () => new Date().toISOString()

export async function getPublishedPosts(options = {}) {
  if (!supabase) return { data: null, error: new Error("Supabase client uninitialized") }

  const { limit, type, category, region, theme, page = 1 } = options
  const now = getNowIso()

  try {
    let query = supabase
      .from("posts")
      .select("*, post_categories(categories(name))")
      .eq("status", "published")
      .lte("published_at", now)
      .order("published_at", { ascending: false })
      .order("created_at", { ascending: false })

    if (type) {
      query = query.eq("type", type)
    }

    if (region) {
      query = query.eq("regional_focus", region)
    }

    if (theme) {
      query = query.eq("thematic_focus", theme)
    }

    if (limit) {
      const fromIndex = (page - 1) * limit
      const toIndex = fromIndex + limit - 1
      query = query.range(fromIndex, toIndex)
    }

    const { data, error } = await query

    if (error) throw error

    let mapped = (data || []).map(mapPostToPublicShape)

    if (category && category !== "all") {
      mapped = mapped.filter(p => p.categories.some(c => c.toLowerCase() === category.toLowerCase()))
    }

    return { data: mapped, error: null }
  } catch (err) {
    console.error("[AASU ContentService] getPublishedPosts error:", err)
    return { data: null, error: err }
  }
}

export async function getPublishedPostBySlug(slugOrId) {
  if (!supabase) return { data: null, error: new Error("Supabase client uninitialized") }

  const now = getNowIso()

  try {
    let query = supabase
      .from("posts")
      .select("*, post_categories(categories(name)), post_gallery_images(image_url, alt_text, caption, sort_order)")
      .eq("status", "published")
      .lte("published_at", now)

    const isUuid = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(slugOrId)

    if (isUuid) {
      query = query.or("slug.eq." + slugOrId + ",id.eq." + slugOrId)
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

export async function getLatestNews(limit = 3) {
  return getPublishedPosts({ limit, type: "news" })
}

export async function getPublishedEvents(options = {}) {
  return getPublishedPosts({ ...options, type: "event" })
}

export async function getPublishedPressReleases(options = {}) {
  return getPublishedPosts({ ...options, type: "press" })
}

export async function getHeroPosts() {
  if (!supabase) return { data: null, error: new Error("Supabase client uninitialized") }

  const now = getNowIso()

  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*, post_categories(categories(name))")
      .eq("status", "published")
      .lte("published_at", now)
      .neq("hero_position", "none")
      .or("featured_until.is.null,featured_until.gte." + now)
      .order("published_at", { ascending: false })

    if (error) throw error

    const mapped = (data || []).map(mapPostToPublicShape)
    return { data: mapped, error: null }
  } catch (err) {
    console.error("[AASU ContentService] getHeroPosts error:", err)
    return { data: null, error: err }
  }
}

export async function searchPublishedPosts(queryText, filters = {}) {
  if (!supabase) return { data: null, error: new Error("Supabase client uninitialized") }

  const now = getNowIso()
  const cleanQuery = (queryText || "").trim()

  try {
    let query = supabase
      .from("posts")
      .select("*, post_categories(categories(name))")
      .eq("status", "published")
      .lte("published_at", now)
      .order("published_at", { ascending: false })

    if (cleanQuery) {
      query = query.or("title.ilike.%" + cleanQuery + "%,excerpt.ilike.%" + cleanQuery + "%,content.ilike.%" + cleanQuery + "%")
    }

    if (filters.type) {
      query = query.eq("type", filters.type)
    }

    const { data, error } = await query

    if (error) throw error

    let mapped = (data || []).map(mapPostToPublicShape)

    if (filters.category && filters.category !== "all") {
      mapped = mapped.filter(p => p.categories.some(c => c.toLowerCase() === category.toLowerCase()))
    }

    return { data: mapped, error: null }
  } catch (err) {
    console.error("[AASU ContentService] searchPublishedPosts error:", err)
    return { data: null, error: err }
  }
}
