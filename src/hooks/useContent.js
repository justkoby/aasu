import { useState, useEffect, useCallback, useRef } from "react"
import {
  getPublishedPosts,
  getPublishedPostBySlug,
  getHeroPosts,
  getLatestNews,
  getPublishedEvents,
  getPublishedPressReleases,
  getClimatePosts,
  searchPublishedPosts
} from "../services/contentService"

export function usePublishedPosts(options = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const isMountedRef = useRef(true)

  const fetchPosts = useCallback(async () => {
    setLoading(true)
    setError(null)

    const res = await getPublishedPosts(options)
    if (isMountedRef.current) {
      setData(res.data)
      setError(res.error)
      setLoading(false)
    }
  }, [JSON.stringify(options)])

  useEffect(() => {
    isMountedRef.current = true
    fetchPosts()
    return () => {
      isMountedRef.current = false
    }
  }, [fetchPosts])

  return { data, loading, error, refetch: fetchPosts }
}

export function usePublishedPost(slugOrId) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const isMountedRef = useRef(true)

  const fetchPost = useCallback(async () => {
    if (!slugOrId) {
      setLoading(false)
      return
    }
    setLoading(true)
    setError(null)

    const res = await getPublishedPostBySlug(slugOrId)
    if (isMountedRef.current) {
      setData(res.data)
      setError(res.error)
      setLoading(false)
    }
  }, [slugOrId])

  useEffect(() => {
    isMountedRef.current = true
    fetchPost()
    return () => {
      isMountedRef.current = false
    }
  }, [fetchPost])

  return { data, loading, error, refetch: fetchPost }
}

export function useHeroPosts() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const isMountedRef = useRef(true)

  const fetchHero = useCallback(async () => {
    setLoading(true)
    setError(null)

    const res = await getHeroPosts()
    if (isMountedRef.current) {
      setData(res.data)
      setError(res.error)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    isMountedRef.current = true
    fetchHero()
    return () => {
      isMountedRef.current = false
    }
  }, [fetchHero])

  return { data, loading, error, refetch: fetchHero }
}

export function useLatestNews(limit = 3) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const isMountedRef = useRef(true)

  const fetchNews = useCallback(async () => {
    setLoading(true)
    setError(null)

    const res = await getLatestNews(limit)
    if (isMountedRef.current) {
      setData(res.data)
      setError(res.error)
      setLoading(false)
    }
  }, [limit])

  useEffect(() => {
    isMountedRef.current = true
    fetchNews()
    return () => {
      isMountedRef.current = false
    }
  }, [fetchNews])

  return { data, loading, error, refetch: fetchNews }
}

export function usePublishedEvents(options = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const isMountedRef = useRef(true)

  const fetchEvents = useCallback(async () => {
    setLoading(true)
    setError(null)

    const res = await getPublishedEvents(options)
    if (isMountedRef.current) {
      setData(res.data)
      setError(res.error)
      setLoading(false)
    }
  }, [JSON.stringify(options)])

  useEffect(() => {
    isMountedRef.current = true
    fetchEvents()
    return () => {
      isMountedRef.current = false
    }
  }, [fetchEvents])

  return { data, loading, error, refetch: fetchEvents }
}

export function usePublishedPressReleases(options = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const isMountedRef = useRef(true)

  const fetchReleases = useCallback(async () => {
    setLoading(true)
    setError(null)

    const res = await getPublishedPressReleases(options)
    if (isMountedRef.current) {
      setData(res.data)
      setError(res.error)
      setLoading(false)
    }
  }, [JSON.stringify(options)])

  useEffect(() => {
    isMountedRef.current = true
    fetchReleases()
    return () => {
      isMountedRef.current = false
    }
  }, [fetchReleases])

  return { data, loading, error, refetch: fetchReleases }
}

export function useClimatePosts(limit = 3) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const isMountedRef = useRef(true)

  const fetchClimate = useCallback(async () => {
    setLoading(true)
    setError(null)

    const res = await getClimatePosts(limit)
    if (isMountedRef.current) {
      setData(res.data)
      setError(res.error)
      setLoading(false)
    }
  }, [limit])

  useEffect(() => {
    isMountedRef.current = true
    fetchClimate()
    return () => {
      isMountedRef.current = false
    }
  }, [fetchClimate])

  return { data, loading, error, refetch: fetchClimate }
}

export function useSearchPosts(queryText, filters = {}, delay = 300) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const requestIdRef = useRef(0)
  const isMountedRef = useRef(true)

  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  }, [])

  useEffect(() => {
    const currentRequestId = ++requestIdRef.current

    if (!queryText || !queryText.trim()) {
      setData([])
      setLoading(false)
      setError(null)
      return
    }

    setLoading(true)
    setError(null)

    const handler = setTimeout(async () => {
      const res = await searchPublishedPosts(queryText, filters)
      
      // Ignore response if a newer search request was initiated
      if (isMountedRef.current && currentRequestId === requestIdRef.current) {
        setData(res.data)
        setError(res.error)
        setLoading(false)
      }
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [queryText, JSON.stringify(filters), delay])

  return { data, loading, error }
}
