import React from "react";
import "./Footer.css";
import feather from "feather-icons";

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
      <div className="cima-footer-info">
        <div className="container row">
          <div className="col-4 cima-footer-brand">
            <img
              src={require("../../assets/cima-logo.png")}
              className="cima-footer-brand-logo"
            />
            <span className="cima-footer-brand-name">CIMA</span>
            <span className="cima-footer-brand-email">info@cima.pt</span>
          </div>
          <div className="col-4"></div>
          <div className="col-4 cima-footer-brand">
            <span className="cima-footer-links-title">COMPANY</span>
            {links.map(link => (
              <span className="cima-footer-link">{link.name}</span>
            ))}
          </div>
        </div>
        <div className="container row footer-final">
          <i className="footer-icon" data-feather="github"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;

const links = [
  { name: "Features" },
  { name: "About" },
  { name: "Who" },
  { name: "Search" }
];
