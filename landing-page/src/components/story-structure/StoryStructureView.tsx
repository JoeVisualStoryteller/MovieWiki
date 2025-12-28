import { useMarkdownLoader } from '../../hooks/useMarkdownLoader'
import { MarkdownRenderer } from '../screenplay/MarkdownRenderer'
import './StoryStructureView.css'

export function StoryStructureView() {
  const { content, loading, error } = useMarkdownLoader('screenplay/master-beats.md')

  if (loading) {
    return (
      <div className="story-structure-view">
        <div className="loading-state">
          <p>Loading story structure...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="story-structure-view">
        <div className="error-state">
          <h2>Error Loading Story Structure</h2>
          <p>{error.message}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="story-structure-view">
      <div className="story-structure-header">
        <h1>THE DEATH KNIGHT & THE QUEEN</h1>
        <h2>Complete Story Structure</h2>
        <p className="structure-description">
          Master canonical screenplay archive showing the complete 20-Act / 400-Scene structure.
          Acts I-V available as full screenplay prose. Acts VI-XX shown as scene beats.
        </p>
      </div>

      <div className="story-structure-content">
        <MarkdownRenderer content={content} className="beats-renderer" />
      </div>
    </div>
  )
}
