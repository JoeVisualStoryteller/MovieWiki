import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>The Death Knight & The Queen</h3>
            <p>A dark fantasy screenplay exploring duty, love, restraint, and the cost of power.</p>
          </div>

          <div className="footer-section">
            <h4>Project</h4>
            <ul>
              <li><a href="https://github.com/JoeVisualStoryteller/MovieWiki" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
              <li><a href="https://github.com/JoeVisualStoryteller/MovieWiki/wiki" target="_blank" rel="noopener noreferrer">Wiki</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Content</h4>
            <ul>
              <li>5 Acts</li>
              <li>42+ Scenes</li>
              <li>Canon Documentation</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} The Death Knight & The Queen. Created by Joe Visual Storyteller.</p>
          <p className="footer-note">A screenplay work in progress</p>
        </div>
      </div>
    </footer>
  )
}
