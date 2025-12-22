import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Queen & Joseph</h3>
            <p>A dark fantasy epic exploring duty, love, and death magic.</p>
          </div>

          <div className="footer-section">
            <h4>Project</h4>
            <ul>
              <li><a href="#scenes">Scenes</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="https://github.com/JoeVisualStoryteller/MovieWiki" target="_blank" rel="noopener noreferrer">GitHub Wiki</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Technology</h4>
            <ul>
              <li>Generated with Sora AI</li>
              <li>Cinematic storytelling</li>
              <li>Dark fantasy narrative</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Queen & Joseph Project. Created by Joe Visual Storyteller.</p>
          <p className="footer-note">All scenes generated using Sora AI prompts</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
