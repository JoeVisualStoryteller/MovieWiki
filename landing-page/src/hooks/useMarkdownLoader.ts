import { useState, useEffect } from 'react'

interface MarkdownLoaderResult {
  content: string
  loading: boolean
  error: Error | null
}

export function useMarkdownLoader(filePath: string): MarkdownLoaderResult {
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(`/content/${filePath}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load ${filePath}: ${res.statusText}`)
        }
        return res.text()
      })
      .then((text) => {
        setContent(text)
        setLoading(false)
      })
      .catch((err) => {
        setError(err as Error)
        setLoading(false)
      })
  }, [filePath])

  return { content, loading, error }
}
