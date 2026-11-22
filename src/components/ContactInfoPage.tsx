import React from "react";
import "../styles/contact-info.css";

export interface ContactNumber {
  number: string;
  title: string;
  description: string;
  isEmergency?: boolean;
  available: string;
}

interface ContactInfoPageProps {
  numbers: ContactNumber[];
  onCall: (number: string, isEmergency: boolean, title: string) => void;
  onBack: () => void;
}

export const ContactInfoPage: React.FC<ContactInfoPageProps> = ({
  numbers,
  onCall,
  onBack,
}) => {
  return (
    <main className="contact-info-page">
      <button className="back-link" onClick={onBack}>
        ← Back
      </button>

      <div className="contact-header">
        <h1>Contact Information</h1>
        <p>Reach out to any of these services directly. Choose the number that fits your need.</p>
      </div>

      <div className="contact-grid">
        {numbers.map((contact) => (
          <div
            key={contact.number}
            className={`contact-card ${contact.isEmergency ? "emergency" : ""}`}
          >
            {contact.isEmergency && <div className="emergency-label">🚨 Emergency</div>}

            <div className="contact-header-card">
              <h3>{contact.title}</h3>
              <div className="contact-availability">{contact.available}</div>
            </div>

            <p className="contact-description">{contact.description}</p>

            <div className="contact-number-display">
              <span className="phone-label">Phone:</span>
              <span className="phone-number">{contact.number}</span>
            </div>

            <div className="contact-actions">
              <button
                className={`btn-call ${contact.isEmergency ? "emergency" : ""}`}
                onClick={() =>
                  onCall(contact.number, contact.isEmergency || false, contact.title)
                }
                aria-label={`Call ${contact.title} at ${contact.number}`}
              >
                📞 Call
              </button>

              <button
                className="btn-copy"
                onClick={() => {
                  navigator.clipboard.writeText(contact.number);
                  alert(`Copied ${contact.number} to clipboard`);
                }}
                aria-label={`Copy ${contact.number}`}
              >
                📋 Copy
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="contact-tips">
        <h3>💡 Tips for calling</h3>
        <ul>
          <li><strong>On mobile:</strong> Click "Call" to open your phone app</li>
          <li><strong>On desktop/laptop:</strong> Use "Copy" to copy the number and dial it from your phone</li>
          <li><strong>After hours:</strong> Most services have voicemail or call routing options</li>
          <li><strong>In crisis:</strong> 988 is available 24/7</li>
        </ul>
      </div>
    </main>
  );
};
