import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Queen & Joseph</h1>
        <p className="hero-subtitle">A Dark Fantasy Epic Generated with Sora AI</p>
        <p className="hero-description">
          Duty versus love. Betrayal without malice. Restrained grief.
          <br />
          Experience a cinematic journey of death magic, forbidden love, and the weight of the crown.
        </p>
        <div className="hero-cta">
          <a href="#scenes" className="btn btn-primary">Explore Scenes</a>
          <a href="#gallery" className="btn btn-secondary">Watch Clips</a>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  )
}

export default Hero
