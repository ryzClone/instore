import React, { useEffect } from "react";
import "../style/components/modal.css";
import arrowLeft from "../Image/png/arrow left.png";
import Close from "../Image/png/close.png";

export default function FullScreenModal({ isActive, onClose, product }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27 && isActive) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isActive, onClose]);

  const closeModal = () => {
    onClose();
  };

  return (
    <div
      className={`modal-overlay ${isActive ? "active" : ""}`}
      onClick={closeModal}
    >
      <div
        className={`modal-content ${isActive ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="close-modals">
          <button className="left-close-btn">
            <img src={arrowLeft} alt="" className="arrow-left-png" />
            <h3 onClick={closeModal}>All goods</h3>
          </button>
          <button className="close-button" onClick={closeModal}>
            <img src={Close} alt="" style={{ width: "25px" }} />
          </button>
        </div>

        <div className="modal-content-body">
          <div className="modal-content-body-left">
            <img
              src={product.img1}
              alt={product.title}
              className="modal-content-body-left-img"
            />
            <div className="next-buttons">
              <div className="prevbtn" style={{ color: "red" }}>
                {"<"}
              </div>
              <div className="nextBtn" style={{ color: "red" }}>
                {">"}
              </div>
            </div>
          </div>
          <div className="modal-content-body-right">
            <h2>{product.title}</h2>
            <p>{product.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
