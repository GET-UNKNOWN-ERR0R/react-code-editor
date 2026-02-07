import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      {/* Header */}
      <header className="about-header">
        <h1>About CodeEditor</h1>
        <p>
          CodeEditor is a modern, web-based code editor and compiler built to
          simplify the way developers write, run, and experiment with code.
        </p>
      </header>

      {/* What is CodeEditor */}
      <section className="about-section">
        <h2>What is CodeEditor?</h2>
        <p>
          CodeEditor is designed for developers, students, and educators who want
          a fast and distraction-free coding environment. It allows users to
          write source code, execute it instantly, and view results directly in
          the browser — without installing any software locally.
        </p>
      </section>

      {/* Vision */}
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          Our vision is to make coding accessible to everyone. Whether you are
          learning your first programming language or testing advanced logic,
          CodeEditor provides a clean and reliable platform focused purely on
          productivity and learning.
        </p>
      </section>

      {/* Key Features */}
      <section className="about-section">
        <h2>Key Features</h2>
        <ul>
          <li>Instant code execution with real-time output</li>
          <li>Support for multiple programming languages</li>
          <li>Clean and beginner-friendly interface</li>
          <li>Secure, sandboxed execution environment</li>
          <li>Optimized for speed and performance</li>
        </ul>
      </section>

      {/* Who is it for */}
      <section className="about-section">
        <h2>Who is CodeEditor For?</h2>
        <p>
          CodeEditor is built for a wide range of users:
        </p>
        <ul>
          <li>Students learning programming concepts</li>
          <li>Developers testing snippets and algorithms</li>
          <li>Educators demonstrating live code examples</li>
          <li>Interview preparation and practice sessions</li>
        </ul>
      </section>

      {/* Technology */}
      <section className="about-section">
        <h2>Technology & Architecture</h2>
        <p>
          CodeEditor is built using modern web technologies with a focus on
          scalability and security. The editor runs in the browser while code
          execution is handled through isolated runtime environments to ensure
          safety and reliability.
        </p>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <p>
          🚀 CodeEditor is continuously evolving. New languages, advanced editor
          features, and public APIs are planned for future releases.
        </p>
      </footer>
    </div>
  );
}
