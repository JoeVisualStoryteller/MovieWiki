import type { WikiSection } from '../../types/screenplay'
import './WikiSidebar.css'

interface WikiSidebarProps {
  currentSection: WikiSection
  onSectionChange: (section: WikiSection) => void
}

const sections: Array<{ id: WikiSection; label: string; description: string }> = [
  { id: 'canon-rules', label: 'Canon Rules', description: 'Immutable story constraints' },
  { id: 'story-bible', label: 'Story Bible', description: 'Core themes and characters' },
  { id: 'characters', label: 'Characters', description: 'Character profiles' },
  { id: 'scene-directory', label: 'Scene Directory', description: 'Full scene index' }
]

export function WikiSidebar({ currentSection, onSectionChange }: WikiSidebarProps) {
  return (
    <div className="wiki-sidebar">
      <div className="wiki-sidebar-header">
        <h3>Production Bible</h3>
      </div>
      <nav className="wiki-nav">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`wiki-nav-item ${currentSection === section.id ? 'active' : ''}`}
            onClick={() => onSectionChange(section.id)}
          >
            <span className="wiki-nav-label">{section.label}</span>
            <span className="wiki-nav-desc">{section.description}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
