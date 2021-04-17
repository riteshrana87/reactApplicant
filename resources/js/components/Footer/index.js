import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="footer-wrapper">
            <div className="footer-faq">FAQ</div>
            <ul className="footer-nav">
              <li className="footer-nav-item">
                <a
                  className="footer-link"
                  href="http://github.com/vpmistry13"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github-square" />
                  <span>Github</span>
                </a>
              </li>
              <li className="footer-nav-item">
                <a
                  className="footer-link"
                  href="https://www.linkedin.com/in/vishal13/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" />
                  <span>Linkedin</span>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
