import "./PrivacyPolicy.css"
export default function PrivacyPolicy() {
  return (
    <div id="privacy-page" className="privacy-container">
      {/* Header */}
      <header id="privacy-header" className="privacy-header">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-updated">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </header>

      {/* Introduction */}
      <section id="privacy-introduction" className="privacy-section">
        <p className="privacy-text">
          At CodeEditor, your privacy is extremely important to us. This Privacy
          Policy explains how we collect, use, store, and protect your
          information when you use our platform, services, and tools.
        </p>
      </section>

      {/* Information We Collect */}
      <section id="privacy-data-collection" className="privacy-section">
        <h2 className="privacy-heading">Information We Collect</h2>

        <p className="privacy-text">
          We collect limited information that is necessary to operate and
          improve CodeEditor.
        </p>

        <ul className="privacy-list">
          <li>
            <strong>Account Information:</strong> Email address and basic profile
            details when you sign up.
          </li>
          <li>
            <strong>Usage Data:</strong> Interaction data such as pages visited,
            features used, and editor activity.
          </li>
          <li>
            <strong>Technical Data:</strong> Browser type, device information,
            IP address, and operating system.
          </li>
        </ul>
      </section>

      {/* How We Use Data */}
      <section id="privacy-data-usage" className="privacy-section">
        <h2 className="privacy-heading">How We Use Your Information</h2>

        <ul className="privacy-list">
          <li>To provide and maintain the CodeEditor service</li>
          <li>To improve performance, reliability, and usability</li>
          <li>To respond to user queries and support requests</li>
          <li>To detect, prevent, and resolve security issues</li>
        </ul>
      </section>

      {/* Code Privacy */}
      <section id="privacy-code" className="privacy-section">
        <h2 className="privacy-heading">Code & Content Privacy</h2>
        <p className="privacy-text">
          Any source code written or executed inside CodeEditor remains private
          to the user. We do not review, sell, or share your code unless required
          for security, legal compliance, or with your explicit consent.
        </p>
      </section>

      {/* Cookies */}
      <section id="privacy-cookies" className="privacy-section">
        <h2 className="privacy-heading">Cookies & Tracking</h2>
        <p className="privacy-text">
          CodeEditor may use cookies or similar technologies to improve user
          experience, remember preferences, and analyze platform usage. You can
          disable cookies through your browser settings if you prefer.
        </p>
      </section>

      {/* Data Security */}
      <section id="privacy-security" className="privacy-section">
        <h2 className="privacy-heading">Data Security</h2>
        <p className="privacy-text">
          We implement industry-standard security measures to protect your data.
          However, no system is completely secure, and we cannot guarantee
          absolute protection against unauthorized access.
        </p>
      </section>

      {/* Third Parties */}
      <section id="privacy-third-party" className="privacy-section">
        <h2 className="privacy-heading">Third-Party Services</h2>
        <p className="privacy-text">
          CodeEditor may integrate with trusted third-party services for
          analytics, authentication, or infrastructure. These services follow
          their own privacy policies and standards.
        </p>
      </section>

      {/* User Rights */}
      <section id="privacy-rights" className="privacy-section">
        <h2 className="privacy-heading">Your Rights</h2>

        <ul className="privacy-list">
          <li>Access the personal data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent where applicable</li>
          <li>Request information about data usage</li>
        </ul>
      </section>

      {/* Policy Changes */}
      <section id="privacy-changes" className="privacy-section">
        <h2 className="privacy-heading">Changes to This Policy</h2>
        <p className="privacy-text">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>
      </section>

      {/* Contact */}
      <section id="privacy-contact" className="privacy-section">
        <h2 className="privacy-heading">Contact Us</h2>
        <p className="privacy-text">
          If you have any questions or concerns regarding this Privacy Policy,
          please contact us at:
        </p>
        <p className="privacy-contact-email">
          <strong>Email:</strong> support@codeeditor.dev
        </p>
      </section>

      {/* Footer */}
      <footer id="privacy-footer" className="privacy-footer">
        <p className="privacy-footer-text">
          🔒 Your trust matters to us. CodeEditor is committed to protecting
          your privacy and data.
        </p>
      </footer>
    </div>
  );
}
