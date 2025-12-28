import './Hero.css'

interface HeroProps {
  onReadClick: () => void
  onExploreClick: () => void
}

export function Hero({ onReadClick, onExploreClick }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">The Death Knight & The Queen</h1>
        <p className="hero-subtitle">A Dark Fantasy Screenplay</p>
        <p className="hero-description">
          Duty versus love. Restraint versus dominion. The cost of power.
          <br />
          Experience a cinematic journey through five acts exploring death magic, forbidden love, and the weight of choice.
        </p>
        <div className="hero-cta">
          <button onClick={onReadClick} className="btn btn-primary">Read Screenplay</button>
          <button onClick={onExploreClick} className="btn btn-secondary">Explore Canon</button>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  )
}
