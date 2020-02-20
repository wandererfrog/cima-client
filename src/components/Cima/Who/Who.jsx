import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import WhoDude from "./WhoDude";
import "./Who.css";

const WHO = gql`
  {
    whoes {
      status
      name
      avatar {
        url
      }
      description
      link
    }
  }
`;

function Who() {
  const { loading, error, data } = useQuery(WHO);

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }

  return (
    <div className="row page-section" id="who">
      <div className="container">
        <div className="section-title">Quem somos:</div>
        {data.whoes.map((dude, idx) => (
          <WhoDude who={dude} />
        ))}
      </div>
    </div>
  );
}

export default Who;
