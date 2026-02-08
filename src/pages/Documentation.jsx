import "./Documentation.css"

export default function Documentation() {
  return (
    <div id="docs-page" className="docs-container">
      {/* Header */}
      <header id="docs-header" className="docs-header">
        <h1 className="docs-title">Documentation</h1>
        <p className="docs-intro">
          Welcome to the official documentation of CodePILOT. This guide
          explains how the editor works, its features, and how developers can
          integrate and use it effectively.
        </p>
      </header>

      {/* Introduction */}
      <section id="docs-introduction" className="docs-section">
        <h2 className="docs-heading">Introduction</h2>
        <p className="docs-text">
          CodePILOT is a browser-based code editor and execution platform that
          allows users to write, run, and test code instantly. It is designed to
          be fast, secure, and beginner-friendly while remaining powerful enough
          for advanced use cases.
        </p>
      </section>

      {/* Getting Started */}
      <section id="docs-getting-started" className="docs-section">
        <h2 className="docs-heading">Getting Started</h2>
        <p className="docs-text">
          Using CodePILOT does not require any installation. Simply select a
          programming language, write your code in the editor, and run it to see
          the output in real time.
        </p>

        <ol className="docs-list ordered">
          <li>Select a programming language</li>
          <li>Write or paste your source code</li>
          <li>Provide input (if required)</li>
          <li>Click the Run button to execute</li>
        </ol>
      </section>

      {/* Editor Features */}
      <section id="docs-editor-features" className="docs-section">
        <h2 className="docs-heading">PILOT Features</h2>

        <ul className="docs-list">
          <li>Syntax highlighting for supported languages</li>
          <li>Automatic code formatting</li>
          <li>Error and output separation</li>
          <li>Keyboard-friendly coding experience</li>
          <li>Light and dark theme support</li>
        </ul>
      </section>

      {/* Code Execution */}
      <section id="docs-code-execution" className="docs-section">
        <h2 className="docs-heading">Code Execution</h2>
        <p className="docs-text">
          When code is executed, it runs inside a secure and isolated environment.
          This ensures safety, prevents misuse, and maintains system stability.
        </p>

        <ol className="docs-list ordered">
          <li>Code is validated before execution</li>
          <li>Execution runs inside a sandbox</li>
          <li>Standard output and errors are captured</li>
          <li>Results are returned to the editor</li>
        </ol>
      </section>

      {/* Supported Languages */}
      <section id="docs-languages" className="docs-section">
        <h2 className="docs-heading">Supported Languages</h2>
        <p className="docs-text">
          CodePILOT supports multiple programming languages. The list is
          continuously expanding based on user demand.
        </p>

        <ul className="docs-list">
          <li>JavaScript</li>
          <li>Python</li>
          <li>C++</li>
          <li>Java</li>
          <li>C</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SHELL</li>
          <li>Ruby</li>
          <li>Go</li>
          <li>Kotlin</li>
          <li>Rust</li>
          <li>PHP</li>
          <li>Swift</li>
          <li>More languages coming soon</li>
        </ul>
      </section>

      {/* API Reference */}
      <section id="docs-api" className="docs-section">
        <h2 className="docs-heading">API Reference (Preview)</h2>
        <p className="docs-text">
          CodePILOT provides APIs for executing code and retrieving results.
          These APIs allow developers to integrate the editor and compiler into
          their own applications.
        </p>

        <div className="docs-api-block">
          <h3 className="docs-api-title">POST /api/execute</h3>
          <p className="docs-text">
            Submits source code for execution and returns a unique execution ID.
          </p>
        </div>

        <div className="docs-api-block">
          <h3 className="docs-api-title">GET /api/result/:id</h3>
          <p className="docs-text">
            Fetches execution output using the provided execution ID.
          </p>
        </div>
      </section>

      {/* Security */}
      <section id="docs-security" className="docs-section">
        <h2 className="docs-heading">Security & Limitations</h2>
        <p className="docs-text">
          All code runs in isolated containers with strict resource limits.
          Infinite loops, unauthorized file access, and system-level commands
          are restricted to maintain platform safety.
        </p>
      </section>

      {/* FAQ */}
      <section id="docs-faq" className="docs-section">
        <h2 className="docs-heading">Frequently Asked Questions</h2>

        <p className="docs-text">
          <strong>Is CodePILOT free to use?</strong><br />
          Yes, the basic editor features are free.
        </p>

        <p className="docs-text">
          <strong>Can I save my code?</strong><br />
          Saving and project features are planned for future updates.
        </p>
      </section>

      {/* Footer */}
      <footer id="docs-footer" className="docs-footer">
        <p className="docs-footer-text">
          📘 This documentation is continuously updated as new features are
          added to CodePILOT.
        </p>
      </footer>
    </div>
  );
}
