import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import LanguageCard from "../components/LanguageCard";
import languages from "../data/languages";
import Features from "../components/Features";
import HowToUse from "../components/HowToUse";
import "./Home.css";

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <>
            {/* HERO */}
            <section className="home-hero" aria-labelledby="home-heading">
                <h1 id="home-heading" className="hero-title">
                    <span className="hero-gradient">Code Online</span>{" "}
                    <span className="hero-accent">Fast & Easy</span>
                </h1>
                <p className="hero-sub">
                    Powerful online editor for modern developers
                </p>
            </section>

            <section className="language-section1" aria-labelledby="language-heading">
                <h2 id="language-heading" className="section-title">
                    <span className="section-gradient">Programming</span>{" "}
                    <span className="section-accent">Stack</span>
                </h2>

                <div className="language-grid">
                    {languages.map(lang => (
                        <LanguageCard key={lang.id} lang={lang} />
                    ))}
                </div>
            </section>


            {/* HOW TO USE */}
            <section id="usage">
                <HowToUse />
            </section>

            {/* FEATURES */}
            <section id="features">
                <Features />
            </section>

            <Footer />
        </>
    );
}
