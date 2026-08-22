import { useState, useEffect, useCallback, useRef } from "react"
import {
  getPublishedPosts,
  getPublishedPostBySlug,
  getHeroPosts,
  getLatestNews
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
