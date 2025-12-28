import { useState } from 'react'
import { acts } from '../../data/scenesData'
import './WikiContent.css'

export function SceneDirectory() {
  const [filterAct, setFilterAct] = useState<string>('all')

  const filteredActs = filterAct === 'all' ? acts : acts.filter((act) => act.id === filterAct)

  return (
    <div className="wiki-content">
      <div className="wiki-header">
        <h1>Scene Directory</h1>
        <p className="wiki-subtitle">Complete index of all scenes across all acts</p>
      </div>

      <div className="scene-filter">
        <label htmlFor="act-filter">Filter by Act:</label>
        <select
          id="act-filter"
          value={filterAct}
          onChange={(e) => setFilterAct(e.target.value)}
          className="act-filter-select"
        >
          <option value="all">All Acts</option>
          {acts.map((act) => (
            <option key={act.id} value={act.id}>
              {act.title}
            </option>
          ))}
        </select>
      </div>

      <div className="scene-directory">
        {filteredActs.map((act) => (
          <div key={act.id} className="act-section">
            <h2 className="act-section-title">
              {act.title}
              <span className="act-status">{act.status}</span>
            </h2>
            <div className="scenes-table">
              {act.scenes.map((scene) => (
                <div key={scene.id} className="scene-row">
                  <div className="scene-id">Scene {scene.id}</div>
                  <div className="scene-details">
                    <h4>{scene.title}</h4>
                    <p className="scene-location">{scene.location}</p>
                    {scene.themes.length > 0 && (
                      <div className="scene-themes">
                        {scene.themes.map((theme) => (
                          <span key={theme} className="theme-tag">
                            {theme}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
