import { characters } from '../../data/scenesData'
import './WikiContent.css'

export function CharacterProfiles() {
  return (
    <div className="wiki-content">
      <div className="wiki-header">
        <h1>Characters</h1>
        <p className="wiki-subtitle">Locked character profiles and appearances</p>
      </div>
      <div className="character-grid">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <div className="character-header">
              <h3>{character.name}</h3>
              <span className="character-title">{character.title}</span>
            </div>
            <p className="character-description">{character.description}</p>
            <div className="character-appearances">
              <span className="appearances-label">Appears in:</span>
              <div className="scene-badges">
                {character.appearances.map((sceneId) => (
                  <span key={sceneId} className="scene-badge">
                    Scene {sceneId}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
