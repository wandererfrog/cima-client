import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-scroll";

import "./Footer.css";
import menuItems from "../../data/links";

function Footer({ history }) {
  return (
    <div className="cima-footer">
      <div className="cima-footer-contact">
        <div className="cima-footer-contact-msg">
          <div className="cima-footer-contact-msg-title">
            Precisa de algo parecido?
          </div>
          <div className="cima-footer-contact-msg-text">
            Nós podemos ajuda-lo a entender a Data da sua empresa.
          </div>
        </div>
        <a
          className="cima-footer-contact-msg-btn"
          href="mailto:bspmendonca@gmail.com"
        >
          Contacte-nos
        </a>
      </div>
      <div className="cima-footer-info">
        <div className="container row">
          <div className="col-4 cima-footer-brand">
            <img
              src={require("../../assets/cima-logo.png")}
              className="cima-footer-brand-logo"
            />
            {/* <span className="cima-footer-brand-name">CIMA</span> */}
            <span className="cima-footer-brand-email">
              bspmendonca@gmail.com
            </span>
          </div>
          <div className="col-4"></div>
          <div className="col-4 cima-footer-brand">
            <span className="cima-footer-links-title">LINKS</span>
            {menuItems.map(link => {
              if (link.inner) {
                return (
                  <Link
                    to={link.title}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                  >
                    <span className="cima-footer-link">
                      {link.title.toUpperCase()}
                    </span>
                  </Link>
                );
              } else {
                return (
                  <span
                    className="cima-footer-link"
                    onClick={() => {
                      history.push(link.path);
                    }}
                  >
                    {link.title.toUpperCase()}
                  </span>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Footer);
