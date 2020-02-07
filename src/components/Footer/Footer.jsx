import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="cima-footer">
      <div className="cima-footer-contact">
        <div className="cima-footer-contact-msg">
          <div className="cima-footer-contact-msg-title">
            Need something done?
          </div>
          <div className="cima-footer-contact-msg-text">
            We can help you with data analysis and visualization.
          </div>
        </div>
        <button className="cima-footer-contact-msg-btn">Contact us</button>
      </div>
      <div className="cima-footer-links" />
    </div>
  );
}

export default Footer;
