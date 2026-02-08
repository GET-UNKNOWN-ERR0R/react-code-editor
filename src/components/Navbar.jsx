import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar({ dark, setDark }) {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isHome = location.pathname === "/";

    const scrollToSection = (id) => {
        if (location.pathname === "/") {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/", { state: { scrollTo: id } });
        }
        setOpen(false);
    };

    return (
        <>
            {/* NAVBAR */}
            <nav className={`navbar ${isHome ? "navbar-home" : "navbar-full"} ${dark ? "dark" : ""}`}>
                <div className="navbar-inner">
                    {/* LOGO */}
                    <Link to="/" className="logo">
                        CodePILOT
                    </Link>

                    {/* DESKTOP MENU */}
                    <div className="menu desktop">
                        <Link to="/" className="nav-link">Home</Link>

                        <button onClick={() => scrollToSection("features")} className="nav-link">
                            Features
                        </button>

                        <button onClick={() => scrollToSection("usage")} className="nav-link">
                            Workflow
                        </button>

                        <button onClick={() => setDark(!dark)} className="icon-btn">
                            {dark ? <FiSun /> : <FiMoon />}
                        </button>
                    </div>

                    {/* MOBILE CONTROLS */}
                    <div className="menu mobile">
                        <button onClick={() => setDark(!dark)} className="icon-btn">
                            {dark ? <FiSun /> : <FiMoon />}
                        </button>

                        <button onClick={() => setOpen(true)} className="icon-btn">
                            <FiMenu />
                        </button>
                    </div>

                </div>
            </nav>
            {/* MOBILE DRAWER */}
            <div className={`drawer ${open ? "open" : ""} ${dark ? "dark" : ""}`}>
                <button className="close-btn" onClick={() => setOpen(false)}>
                    <FiX />
                </button>

                <div className="drawer-links">
                    <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                    <button onClick={() => scrollToSection("features")}>Features</button>
                    <button onClick={() => scrollToSection("usage")}>Workflow</button>
                </div>
            </div>
        </>
    );
}

