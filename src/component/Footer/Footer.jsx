// import React from 'react';
import "../Footer/footer.css";

export default function Footer() {
return (
    <footer className="footer">
        <div className="footer-container container">
            {/* <hr/> */}
            <h1 className="footer-title">Lalit Kumar Jangir</h1>

            <ul className="footer-list">
                <li>
                    <a href="#about" className="footer-link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer-link">Skills</a>
                </li>
                <li>
                    <a href="#project" className="footer-link">Projects</a>
                </li>
            </ul>

            <div className="footer-social">
            <a href="https://twitter.com/lalitjangir33" className="footer-social-link" rel="noreferrer" target="_blank">
            <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/lalit-kumar-jangir-281157230/" className="footer-social-link" rel="noreferrer" target="_blank">
            <i className="uil uil-linkedin"></i>
            </a>
            <a href="https://github.com/lalitjangir2002" rel="noreferrer" className="footer-social-link" target="_blank">
            <i className="uil uil-github-alt"></i>
            </a>
            </div>

            <span className="footer-copy">&#169; Kumar. 2023</span>
        </div>
    </footer>
)
}
