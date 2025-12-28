import { useMarkdownLoader } from '../../hooks/useMarkdownLoader'
import { MarkdownRenderer } from '../screenplay/MarkdownRenderer'
import './WikiContent.css'

export function CanonRules() {
  const { content, loading, error } = useMarkdownLoader('canon/canon-rules.md')

  if (loading) {
    return <div className="wiki-content loading"><div className="spinner"></div><p>Loading...</p></div>
  }

  if (error) {
    return <div className="wiki-content error"><h3>Error</h3><p>{error.message}</p></div>
  }

  return (
    <div className="wiki-content">
      <div className="wiki-header">
        <h1>Canon Rules</h1>
        <p className="wiki-subtitle">Immutable story constraints that define the Death Knight universe</p>
      </div>
      <MarkdownRenderer content={content} className="wiki-body" />
    </div>
  )
}
