import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      {/* Intro */}
      <h1 className="contact-title">Contact Us</h1>

      <p className="contact-intro">
        We’d love to hear from you. Whether you have a question, found a bug,
        want to suggest a feature, or simply want to share feedback, the
        CodePILOT team is always open to listening.
      </p>

      {/* Reach Us */}
      <h2 className="contact-heading" id="reach-us">
        How to Reach Us
      </h2>

      <p className="contact-text">
        The primary way to contact us is through email. We aim to respond to all
        queries as quickly as possible.
      </p>

      <ul className="contact-list">
        <li>
          <strong>Email:</strong> support@codePILOT.dev
        </li>
        <li>
          <strong>Response Time:</strong> Typically within 24–48 hours
        </li>
      </ul>

      {/* Reasons */}
      <h2 className="contact-heading" id="reasons">
        What Can You Contact Us For?
      </h2>

      <ul className="contact-list">
        <li>Technical issues or bugs in the codePILOT</li>
        <li>Feature requests or improvement suggestions</li>
        <li>Questions about supported languages or execution limits</li>
        <li>Feedback on user experience and performance</li>
        <li>Partnerships, collaborations, or integrations</li>
      </ul>

      {/* Bug Reports */}
      <h2 className="contact-heading" id="bugs">
        Bug Reports & Feedback
      </h2>

      <p className="contact-text">
        If you’re reporting a bug, please include as much detail as possible,
        such as the programming language used, sample code, and steps to
        reproduce the issue. This helps us diagnose and fix problems faster.
      </p>

      {/* Security */}
      <h2 className="contact-heading" id="security">
        Security Concerns
      </h2>

      <p className="contact-text">
        Security is a top priority at CodePILOT. If you discover a potential
        vulnerability or security issue, please report it immediately via
        email. Responsible disclosure helps us keep the platform safe for
        everyone.
      </p>

      {/* Commitment */}
      <h2 className="contact-heading" id="commitment">
        Our Commitment
      </h2>

      <p className="contact-text">
        Every message is reviewed by our team. Your feedback directly influences
        our roadmap and helps us build a better coding platform for developers,
        students, and educators.
      </p>

      {/* Closing */}
      <p className="contact-closing">
        Thank you for using CodePILOT and being part of our growing developer
        community 🚀
      </p>
    </div>
  );
}
