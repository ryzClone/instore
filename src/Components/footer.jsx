import React from "react";
import "../style/components/footer.css";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="footer-body">
          <div className="footer-body-top">
            <div className="footer-body-top-title">Contacts</div>
            <div className="footer-body-top-text">
              We always strive to make friends with our clients, call or write
              to us with any questions.
            </div>
          </div>

          <div className="footer-body-bottom">
            <div className="footer-body-bottom-title">
              <span>Телефон:</span> +99890 006 70 00
            </div>
            <div className="footer-body-bottom-text">
              <span>E-mail: </span> ABokizhonov1998@mail.ru
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
