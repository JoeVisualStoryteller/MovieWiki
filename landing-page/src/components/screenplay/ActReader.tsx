import { useMarkdownLoader } from '../../hooks/useMarkdownLoader'
import { MarkdownRenderer } from './MarkdownRenderer'
import './ActReader.css'

interface ActReaderProps {
  actId: string
}

export function ActReader({ actId }: ActReaderProps) {
  const { content, loading, error } = useMarkdownLoader(`screenplay/${actId}.md`)

  if (loading) {
    return (
      <div className="act-reader loading">
        <div className="spinner"></div>
        <p>Loading screenplay...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="act-reader error">
        <h3>Error Loading Act</h3>
        <p>{error.message}</p>
      </div>
    )
  }

  return (
    <div className="act-reader">
      <MarkdownRenderer content={content} className="screenplay-container" />
    </div>
  )
}
