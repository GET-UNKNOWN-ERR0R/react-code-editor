import {
    FiSettings,
    FiEdit3,
    FiLogIn,
    FiPlay,
    FiDownload
} from "react-icons/fi";
import "./HowToUse.css";
import { FiRefreshCw } from "react-icons/fi";
import { MdRestartAlt } from "react-icons/md";



const FLOW = [
    {
        icon: FiSettings,
        title: "Select Language",
        desc: "Pick a programming language and initialize the environment."
    },
    {
        icon: FiEdit3,
        title: "Write Code",
        desc: "Write code, minimal editor designed for focus."
    },
    {
        icon: FiLogIn,
        title: "Provide Input",
        desc: "Pass inputs separately without cluttering code (if available)."
    },
    {
        icon: FiPlay,
        title: "Run Program",
        desc: "Execute instantly and view structured output."
    },
    {
        icon: FiDownload,
        title: "Download",
        desc: "Download your code in the same file extension."
    },
    {
        icon: MdRestartAlt,
        title: "Reset",
        desc: "Run again with one click."
    },

];
export default function HowToUse() {
    return (
        <section className="howto">
            <div className="howto-shell">

                {/* LEFT DESCRIPTION */}
                <div className="howto-left">
                    <h2>Editor Workflow</h2>
                    <p>
                        A smooth editor workflow built for speed, clarity and developer comfort.
                        Everything happens in a clean, distraction-free environment.
                    </p>

                    <ul>
                        <li>Zero setup</li>
                        <li>Instant execution</li>
                        <li>Cloud based runtime</li>
                        <li>Keyboard friendly</li>
                        <li>One-click run</li>
                        <li>No local install</li>
                        <li>Browser powered</li>
                        <li>Real-time output</li>
                        <li>Responsive Layout</li>
                        <li>Auto focus editor</li>
                        <li>Secure sandbox</li>
                    </ul>
                </div>

                {/* RIGHT FLOW (CLEAN) */}
                <div className="howto-flow">
                    {FLOW.map((f, i) => {
                        const Icon = f.icon;
                        return (
                            <div key={i} className="editor-row">
                                <div className="editor-track">
                                    <span className="editor-dot" />
                                    {i !== FLOW.length - 1 && <span className="editor-line" />}
                                </div>

                                <div className="editor-body">
                                    <div className="editor-header">
                                        <Icon />
                                        {/* <span>{f.title}</span> */}
                                    </div>

                                    <p className="editor-desc">{f.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
