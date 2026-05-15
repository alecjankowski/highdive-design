// Footer.jsx
function Footer() {
  return (
    <footer className="footer">
      <div className="kit-container">
        <div className="footer-grid">
          <div className="footer-mono">
            <img src="../../assets/logos/HD_Monogram/HD_Monogram_Orange.png" alt="Highdive monogram" />
            <div className="footer-tag">Jump in.</div>
          </div>
          <div>
            <h4>Studio</h4>
            <ul>
              <li><a href="#">Work</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Culture</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4>Reach us</h4>
            <ul>
              <li><a href="mailto:hello@highdive.com">hello@highdive.com</a></li>
              <li><a href="mailto:press@highdive.com">press@highdive.com</a></li>
              <li><a href="mailto:careers@highdive.com">careers@highdive.com</a></li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Vimeo</a></li>
              <li><a href="#">The Dive · Newsletter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Highdive. All rights reserved.</span>
          <span>CHI · NYC · EST 2016</span>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { Footer });
