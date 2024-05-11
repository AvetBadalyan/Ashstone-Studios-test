/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Close from "./../../assets/close.png";
import "./Modal.scss";

export function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={onClose}>
              <img src={Close} alt="close-btn" />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
