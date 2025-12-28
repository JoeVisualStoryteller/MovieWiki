import { acts } from '../../data/scenesData'
import './ActSelector.css'

interface ActSelectorProps {
  selectedAct: string
  onActChange: (actId: string) => void
}

export function ActSelector({ selectedAct, onActChange }: ActSelectorProps) {
  return (
    <div className="act-selector">
      {acts.map((act) => (
        <button
          key={act.id}
          className={`act-tab ${selectedAct === act.id ? 'active' : ''} ${act.status === 'in-progress' ? 'in-progress' : ''}`}
          onClick={() => onActChange(act.id)}
        >
          <span className="act-number">{act.id.replace('act-', 'Act ').toUpperCase()}</span>
          {act.status === 'in-progress' && <span className="badge">In Progress</span>}
        </button>
      ))}
    </div>
  )
}
