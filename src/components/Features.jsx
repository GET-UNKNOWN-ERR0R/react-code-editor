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
                        <h2>Editor capabilities</h2>
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
                    <h3>About CodePILOT</h3>
                    <p>
                        CodePilot is a modern online code editor built for speed,
                        simplicity and real-world developer workflows.
                    </p>

                    <p>
                        It focuses on clean UI, instant execution and keyboard-first
                        interactions — making it ideal for learners, interviews and
                        quick experiments.
                    </p>
                    <p>
                        Whether you are learning a new language, preparing for technical
                        interviews, testing small ideas, or demonstrating concepts,
                        CodePilot provides a fast and distraction-free environment
                        that works directly in the browser
                    </p>
                    <p>
                        Developers can view output in real time, reset the editor to a
                        clean state, and download their code in the original file extension
                        (if available) for local use or sharing. Each run is executed in a fresh,
                        sandboxed environment, ensuring security and predictable behavior.
                    </p>

                    <p className="features-highlight">
                        No setup. No noise. Just code.
                    </p>
                </aside>

            </div>
        </section>
    );
}
