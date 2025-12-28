import type { WikiSection } from '../../types/screenplay'
import { WikiSidebar } from './WikiSidebar'
import { CanonRules } from './CanonRules'
import { StoryBible } from './StoryBible'
import { CharacterProfiles } from './CharacterProfiles'
import { SceneDirectory } from './SceneDirectory'
import './WikiView.css'

interface WikiViewProps {
  section: WikiSection
  onSectionChange: (section: WikiSection) => void
}

export function WikiView({ section, onSectionChange }: WikiViewProps) {
  const renderSection = () => {
    switch (section) {
      case 'canon-rules':
        return <CanonRules />
      case 'story-bible':
        return <StoryBible />
      case 'characters':
        return <CharacterProfiles />
      case 'scene-directory':
        return <SceneDirectory />
      default:
        return <CanonRules />
    }
  }

  return (
    <div className="wiki-view">
      <WikiSidebar currentSection={section} onSectionChange={onSectionChange} />
      <div className="wiki-main">
        {renderSection()}
      </div>
    </div>
  )
}
