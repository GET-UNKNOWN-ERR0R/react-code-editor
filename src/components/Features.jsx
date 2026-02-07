import { useState } from "react";
import {
    Code2,
    Keyboard,
    Play,
    Moon,
    Cloud
} from "lucide-react";
import "./Features.css";

const FLOW = [
    {
        icon: Code2,
        title: "Language Engine",
        desc: "Choose from multiple programming languages with instant environment setup."
    },
    {
        icon: Keyboard,
        title: "Editor Experience",
        desc: "Fast keyboard shortcuts, clean UI and distraction-free coding."
    },
    {
        icon: Play,
        title: "Execution & Output",
        desc: "Run code instantly and get real-time output with error handling."
    },
    {
        icon: Moon,
        title: "Personalization",
        desc: "Switch themes and adjust editor settings for comfort."
    },
    {
        icon: Cloud,
        title: "Cloud Runtime",
        desc: "Everything runs online — no setup, no downloads."
    }
];

export default function Features() {
    const [active, setActive] = useState(0);

    return (
        <section className="features">
            <div className="features-layout">

                {/* LEFT */}
                <div className="features-timeline">
                    <header className="features-header">
                        <h2>Editor Workflow</h2>
                        <p>Designed to feel natural, fast and professional.</p>
                    </header>

                    <div className="timeline">
                        {FLOW.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <div
                                    key={i}
                                    className={`timeline-item ${active === i ? "active" : ""}`}
                                    onMouseEnter={() => setActive(i)}
                                >
                                    <div className="timeline-indicator">
                                        <span className="timeline-dot" />
                                        {i !== FLOW.length - 1 && <span className="timeline-line" />}
                                    </div>

                                    <div className="timeline-content">
                                        <Icon className="timeline-icon" />
                                        <h3>{f.title}</h3>
                                        <p>{f.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT */}
                <aside className="features-info">
                    <h3>About CodePilot</h3>
                    <p>
                        CodePilot is a modern online code editor built for speed,
                        simplicity and real-world developer workflows.
                    </p>

                    <p>
                        It focuses on clean UI, instant execution and keyboard-first
                        interactions — making it ideal for learners, interviews and
                        quick experiments.
                    </p>

                    <p className="features-highlight">
                        No setup. No noise. Just code.
                    </p>
                </aside>

            </div>
        </section>
    );
}
