import React from "react";
import "../styles/call-confirmation-modal.css";

interface CallConfirmationModalProps {
  isOpen: boolean;
  phoneNumber: string;
  serviceTitle?: string;
  isEmergency?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  onViewAllNumbers?: () => void;
}

export const CallConfirmationModal: React.FC<CallConfirmationModalProps> = ({
  isOpen,
  phoneNumber,
  serviceTitle,
  isEmergency = false,
  onConfirm,
  onCancel,
  onViewAllNumbers,
}) => {
  if (!isOpen) return null;

  return (
    <div className="call-confirmation-overlay" onClick={onCancel}>
      <div
        className={`call-confirmation-modal ${isEmergency ? "emergency" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {isEmergency && (
          <div className="emergency-badge">🚨 Emergency Line</div>
        )}

        <div className="modal-header">
          <h2>Confirm Call</h2>
          <button className="close-btn" onClick={onCancel}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          {serviceTitle && (
            <p className="service-title">{serviceTitle}</p>
          )}
          <div className="phone-display">
            <span className="phone-icon">📞</span>
            <span className="phone-number">{phoneNumber}</span>
          </div>
          <p className="disclaimer">
            {isEmergency
              ? "You're about to call an emergency support line. If this is a medical emergency, please call 911."
              : "Clicking 'Call' will open your phone app with this number."}
          </p>
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
          <button
            className={`btn-confirm ${isEmergency ? "emergency" : ""}`}
            onClick={onConfirm}
          >
            Call Now
          </button>
        </div>

        {onViewAllNumbers && (
          <div className="modal-footer-secondary">
            <button className="btn-view-all" onClick={onViewAllNumbers}>
              View all contact numbers →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
