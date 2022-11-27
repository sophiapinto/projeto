import React, { PureComponent } from "react";
import "./footer.css";

class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
        
          <span className="footer-copy">Developer by Elisa and Sophia Pinto&copy;&nbsp;2022</span>
          <div className="footer-navbar">
            <a href="/" className="footer-link">
              Termos de uso
            </a>
            <a href="/" className="footer-link">
              Política de privacidade
            </a>
          </div>
        </div>
        
      </footer>
    );
  }
}

export default Footer;