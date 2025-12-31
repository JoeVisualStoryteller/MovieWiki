import { useMarkdownLoader } from '../../hooks/useMarkdownLoader'
import { MarkdownRenderer } from '../screenplay/MarkdownRenderer'
import './NovelView.css'

export function NovelView() {
  const { content, loading, error } = useMarkdownLoader('novel.md')

  if (loading) {
    return (
      <div className="novel-view">
        <div className="loading-state">
          <p>Loading novel...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="novel-view">
        <div className="error-state">
          <h2>Error Loading Novel</h2>
          <p>{error.message}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="novel-view">
      <div className="novel-header">
        <h1>THE DEATH KNIGHT & THE QUEEN</h1>
        <h2>Novel Edition</h2>
        <p className="novel-description">
          The complete story in novel format - exploring the full narrative arc
          with prose, character interiority, and expanded world-building.
        </p>
      </div>

      <div className="novel-content">
        <MarkdownRenderer content={content} className="novel-text" />
      </div>
    </div>
  )
}
