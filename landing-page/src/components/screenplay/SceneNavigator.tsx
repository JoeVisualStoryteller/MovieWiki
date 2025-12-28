import { acts } from '../../data/scenesData'
import './SceneNavigator.css'

interface SceneNavigatorProps {
  selectedAct: string
  selectedScene: number | null
  onSceneChange: (sceneId: number) => void
}

export function SceneNavigator({ selectedAct, selectedScene, onSceneChange }: SceneNavigatorProps) {
  const currentAct = acts.find((act) => act.id === selectedAct)

  if (!currentAct) {
    return null
  }

  return (
    <div className="scene-navigator">
      <div className="scene-nav-header">
        <h3>Scenes</h3>
        <span className="scene-count">{currentAct.sceneCount} scenes</span>
      </div>
      <div className="scene-list">
        {currentAct.scenes.map((scene) => (
          <button
            key={scene.id}
            className={`scene-item ${selectedScene === scene.id ? 'active' : ''}`}
            onClick={() => onSceneChange(scene.id)}
          >
            <span className="scene-number">{scene.id}</span>
            <div className="scene-info">
              <span className="scene-title">{scene.title}</span>
              <span className="scene-location">{scene.location}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
