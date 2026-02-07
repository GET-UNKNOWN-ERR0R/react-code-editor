import "./API.css";

export default function API() {
  return (
    <div className="api-container">
      {/* Header */}
      <section className="api-header">
        <h1>Code Editor API</h1>
        <p>
          The Code Editor API allows developers to embed a powerful online code
          editor, compiler, and execution engine directly into their own
          applications.
        </p>
      </section>

      {/* Overview */}
      <section className="api-section">
        <h2>Overview</h2>
        <p>
          Our API is designed to provide a secure, scalable, and language-agnostic
          solution for running and managing source code in real time. It supports
          multiple programming languages and offers full control over execution,
          input handling, and output retrieval.
        </p>
      </section>

      {/* Core Capabilities */}
      <section className="api-section">
        <h2>Core Capabilities</h2>
        <ul>
          <li>Compile and execute source code securely</li>
          <li>Support for multiple programming languages</li>
          <li>Real-time output and error handling</li>
          <li>Sandboxed execution environment</li>
          <li>Custom input (stdin) support</li>
        </ul>
      </section>

      {/* Execution Flow */}
      <section className="api-section">
        <h2>Code Execution Flow</h2>
        <ol>
          <li>User submits source code via the API</li>
          <li>Code is validated and sanitized</li>
          <li>Execution runs inside an isolated container</li>
          <li>Standard output and errors are captured</li>
          <li>Execution result is returned as JSON</li>
        </ol>
      </section>

      {/* API Endpoints */}
      <section className="api-section">
        <h2>Planned API Endpoints</h2>

        <div className="endpoint">
          <h3>POST /api/execute</h3>
          <p>Submits code for compilation and execution.</p>
        </div>

        <div className="endpoint">
          <h3>GET /api/result/:id</h3>
          <p>Fetches execution output using a job ID.</p>
        </div>

        <div className="endpoint">
          <h3>GET /api/languages</h3>
          <p>Returns a list of supported programming languages.</p>
        </div>
      </section>

      {/* Security */}
      <section className="api-section">
        <h2>Security & Isolation</h2>
        <p>
          Every execution runs in a sandboxed environment with strict resource
          limits. This prevents malicious code, infinite loops, and unauthorized
          system access.
        </p>
      </section>

      {/* Use Cases */}
      <section className="api-section">
        <h2>Use Cases</h2>
        <ul>
          <li>Online code editors & IDEs</li>
          <li>Educational platforms & coding labs</li>
          <li>Technical interview systems</li>
          <li>Automated code testing tools</li>
        </ul>
      </section>

      {/* Status */}
      <section className="api-footer">
        <p>
          🚧 The Code Editor API is currently under active development.
          Documentation, authentication, and rate limiting will be introduced in
          upcoming releases.
        </p>
      </section>
    </div>
  );
}
