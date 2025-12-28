import { useMarkdownLoader } from '../../hooks/useMarkdownLoader'
import { MarkdownRenderer } from '../screenplay/MarkdownRenderer'
import './WikiContent.css'

export function StoryBible() {
  const { content, loading, error } = useMarkdownLoader('canon/story-bible.md')

  if (loading) {
    return <div className="wiki-content loading"><div className="spinner"></div><p>Loading...</p></div>
  }

  if (error) {
    return <div className="wiki-content error"><h3>Error</h3><p>{error.message}</p></div>
  }

  return (
    <div className="wiki-content">
      <div className="wiki-header">
        <h1>Story Bible</h1>
        <p className="wiki-subtitle">Core characters, themes, and narrative philosophy</p>
      </div>
      <MarkdownRenderer content={content} className="wiki-body" />
    </div>
  )
}
