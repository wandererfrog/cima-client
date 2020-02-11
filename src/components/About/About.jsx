import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import ReactHtmlParser from "react-html-parser";

import "./About.css";

const ABOUT = gql`
  {
    abouts {
      text {
        html
      }
    }
  }
`;

function About() {
  const { loading, error, data } = useQuery(ABOUT);

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }

  return (
    <div className="row page-section" id="about">
      <div className="container">
        <div className="section-title">ABOUT CIMA</div>
        <div className="section-subtitle">
          {ReactHtmlParser(data.abouts[0].text.html)}
        </div>
      </div>
    </div>
  );
}

export default About;
