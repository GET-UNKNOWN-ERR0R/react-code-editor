import {
    FiSettings,
    FiEdit3,
    FiLogIn,
    FiPlay,
    FiDownload
  } from "react-icons/fi";
  import "./HowToUse.css";
  
  const FLOW = [
    {
      icon: FiSettings,
      title: "Select Language",
      desc: "Pick a programming language and initialize the environment."
    },
    {
      icon: FiEdit3,
      title: "Write Code",
      desc: "Use a fast, minimal editor designed for focus."
    },
    {
      icon: FiLogIn,
      title: "Provide Input",
      desc: "Pass inputs separately without cluttering code."
    },
    {
      icon: FiPlay,
      title: "Run Program",
      desc: "Execute instantly and view structured output."
    },
    {
      icon: FiDownload,
      title: "Download",
      desc: "Export your code with one click."
    }
  ];
  
  export default function HowToUse() {
    return (
      <section className="howto">
        <div className="howto-shell">
  
          {/* LEFT DESCRIPTION */}
          <div className="howto-left">
            <h2>How It Works</h2>
            <p>
              A smooth editor workflow built for speed, clarity and developer comfort.
              Everything happens in a clean, distraction-free environment.
            </p>
  
            <ul>
              <li>Zero setup</li>
              <li>Instant execution</li>
              <li>Cloud based runtime</li>
              <li>Keyboard friendly</li>
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
  