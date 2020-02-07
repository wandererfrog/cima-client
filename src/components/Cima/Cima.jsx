import React from "react";
import { Parallax } from "react-parallax";

import "./Cima.css";
import Features from "./Features/Features";
import About from "../About/About";
import Who from "./Who/Who";
import Footer from "../Footer/Footer";

import AnimatedBtn from "../UIComponents/AnimatedBtn/AnimatedBtn";

export default class Cima extends React.Component {
  render() {
    return (
      <div>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={require("../../assets/bg1.jpeg")}
          bgImageAlt="thecow"
          strength={400}
        >
          <div className="cima-section cima-section-mt" id="cima">
            <img
              alt=""
              className="cima-section-logo"
              src={require("../../assets/cima-logo.png")}
            />
            <div className="cima-title">CIMA</div>
            <div className="cima-subtitle">
              {"Centro de Informação dos Mercados Agricolas".toUpperCase()}
            </div>
            <AnimatedBtn
              title="search"
              className="cima-section-button"
              icon="fas fa-angle-double-right"
            />
          </div>
        </Parallax>
        <Features />
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={require("../../assets/bg2.jpeg")}
          bgImageAlt="colors"
          strength={400}
        >
          <div className="cima-section">
            <div className="cima-subtitle">
              {"WORK BETTER WITH BETTER DATA".toUpperCase()}
            </div>
            <AnimatedBtn
              title="prove"
              className="cima-section-button"
              icon="fas fa-angle-double-right"
            />
          </div>
        </Parallax>
        <About />
        <Who />
        <Footer />
      </div>
    );
  }
}
