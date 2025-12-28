import { ActSelector } from './ActSelector'
import { ActReader } from './ActReader'
import { SceneNavigator } from './SceneNavigator'
import './ScreenplayView.css'

interface ScreenplayViewProps {
  selectedAct: string
  onActChange: (actId: string) => void
  selectedScene: number | null
  onSceneChange: (sceneId: number | null) => void
}

export function ScreenplayView({
  selectedAct,
  onActChange,
  selectedScene,
  onSceneChange
}: ScreenplayViewProps) {
  return (
    <div className="screenplay-view">
      <ActSelector selectedAct={selectedAct} onActChange={onActChange} />
      <div className="screenplay-content">
        <SceneNavigator
          selectedAct={selectedAct}
          selectedScene={selectedScene}
          onSceneChange={onSceneChange}
        />
        <ActReader actId={selectedAct} />
      </div>
    </div>
  )
}
