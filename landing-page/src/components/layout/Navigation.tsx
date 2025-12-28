import type { ViewMode } from '../../types/screenplay'
import './Navigation.css'

interface NavigationProps {
  viewMode: ViewMode
  onViewChange: (mode: ViewMode) => void
}

export function Navigation({ viewMode, onViewChange }: NavigationProps) {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <h1>The Death Knight & The Queen</h1>
          <span className="nav-tagline">A Screenplay</span>
        </div>
        <div className="nav-controls">
          <div className="view-switcher">
            <button
              className={`view-btn ${viewMode === 'screenplay' ? 'active' : ''}`}
              onClick={() => onViewChange('screenplay')}
            >
              Screenplay
            </button>
            <button
              className={`view-btn ${viewMode === 'wiki' ? 'active' : ''}`}
              onClick={() => onViewChange('wiki')}
            >
              Wiki
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
