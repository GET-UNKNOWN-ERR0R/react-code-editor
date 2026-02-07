import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer({ dark }) {
    return (
        <footer className={`footer ${dark ? "dark" : ""}`}>
            <div className="footer-container">

                <div>
                    <h3 className="footer-brand">CodeEditor</h3>
                    <p className="footer-text">
                        A modern online code editor to write, run and share code across
                        multiple programming languages — directly from your browser.
                    </p>
                </div>

                <div>
                    <h4 className="footer-title">Languages</h4>
                    <ul className="footer-list">
                        <li>C / C++</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>Go, Rust & more</li>
                    </ul>
                </div>

                <div>
                    <h4 className="footer-title">Resources</h4>
                    <ul className="footer-list">
                        <li>
                            <Link to="/docs">Documentation</Link>
                        </li>
                        <li>
                            <Link to="/api">API Reference</Link>
                        </li>
                        <li>
                            <Link to="/tutorials">Tutorials</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="footer-title">Company</h4>
                    <ul className="footer-list">
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/privacy">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`footer-bottom ${dark ? "dark" : ""}`}>
                © {new Date().getFullYear()} CodeEditor. All rights reserved.
            </div>
        </footer>
    );
}
