import "./Tutorials.css";

export default function Tutorials() {
  return (
    <div id="tutorials-page" className="tutorials-container">
      {/* Header */}
      <header id="tutorials-header" className="tutorials-header">
        <h1 className="tutorials-title">CodeEditor Tutorials</h1>
        <p className="tutorials-intro">
          Learn how to use CodeEditor effectively with step-by-step tutorials,
          examples, and best practices for writing and executing code.
        </p>
      </header>

      {/* Introduction */}
      <section id="tutorials-introduction" className="tutorials-section">
        <h2 className="tutorials-heading">Introduction</h2>
        <p className="tutorials-text">
          The Tutorials section is designed to help beginners and experienced
          developers understand how to write, run, and debug code using
          CodeEditor. Each tutorial focuses on a specific concept and gradually
          builds your confidence.
        </p>
      </section>

      {/* Getting Started */}
      <section id="tutorials-getting-started" className="tutorials-section">
        <h2 className="tutorials-heading">Getting Started</h2>
        <p className="tutorials-text">
          Follow these steps to begin coding with CodeEditor:
        </p>

        <ol className="tutorials-list ordered">
          <li>Open the CodeEditor platform</li>
          <li>Select a programming language</li>
          <li>Write or paste your source code</li>
          <li>Provide input if required</li>
          <li>Click the Run button to execute</li>
        </ol>
      </section>

      {/* Beginner Tutorials */}
      <section id="tutorials-beginner" className="tutorials-section">
        <h2 className="tutorials-heading">Beginner Tutorials</h2>
        <ul className="tutorials-list">
          <li>Writing your first program</li>
          <li>Understanding input and output</li>
          <li>Basic syntax and variables</li>
          <li>Running and fixing simple errors</li>
        </ul>
      </section>

      {/* Intermediate Tutorials */}
      <section id="tutorials-intermediate" className="tutorials-section">
        <h2 className="tutorials-heading">Intermediate Tutorials</h2>
        <ul className="tutorials-list">
          <li>Working with loops and conditions</li>
          <li>Functions and modular code</li>
          <li>Handling runtime errors</li>
          <li>Optimizing code for performance</li>
        </ul>
      </section>

      {/* Advanced Tutorials */}
      <section id="tutorials-advanced" className="tutorials-section">
        <h2 className="tutorials-heading">Advanced Tutorials</h2>
        <ul className="tutorials-list">
          <li>Writing complex algorithms</li>
          <li>Memory and performance considerations</li>
          <li>Using CodeEditor APIs</li>
          <li>Debugging large codebases</li>
        </ul>
      </section>

      {/* Code Execution */}
      <section id="tutorials-execution" className="tutorials-section">
        <h2 className="tutorials-heading">Understanding Code Execution</h2>
        <p className="tutorials-text">
          When you run code in CodeEditor, it executes inside a secure and
          isolated environment. This ensures that your system remains safe while
          providing accurate output and error messages.
        </p>

        <ol className="tutorials-list ordered">
          <li>Code validation before execution</li>
          <li>Sandboxed runtime execution</li>
          <li>Capturing standard output and errors</li>
          <li>Displaying results in real time</li>
        </ol>
      </section>

      {/* Best Practices */}
      <section id="tutorials-best-practices" className="tutorials-section">
        <h2 className="tutorials-heading">Best Practices</h2>
        <ul className="tutorials-list">
          <li>Write clean and readable code</li>
          <li>Test small pieces of logic frequently</li>
          <li>Handle errors properly</li>
          <li>Use comments for clarity</li>
        </ul>
      </section>

      {/* FAQ */}
      <section id="tutorials-faq" className="tutorials-section">
        <h2 className="tutorials-heading">Frequently Asked Questions</h2>

        <p className="tutorials-text">
          <strong>Do I need prior coding experience?</strong><br />
          No. Beginners can start with basic tutorials and progress gradually.
        </p>

        <p className="tutorials-text">
          <strong>Can I practice multiple languages?</strong><br />
          Yes. CodeEditor supports multiple programming languages.
        </p>
      </section>

      {/* Footer */}
      <footer id="tutorials-footer" className="tutorials-footer">
        <p className="tutorials-footer-text">
          📚 New tutorials and learning paths are continuously added to help you
          grow as a developer.
        </p>
      </footer>
    </div>
  );
}
