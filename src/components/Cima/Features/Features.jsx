import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import FeatureEntry from "../FeatureEntry/FeatureEntry";

const FEATURES = gql`
  {
    features(where: { status: PUBLISHED }) {
      status
      icon
      title
      description
    }
  }
`;

function Features() {
  const { loading, error, data } = useQuery(FEATURES);

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }

  return (
    <div className="features-container" id="features">
      <div className="row">
        <div className="container">
          <div className="section-title">FEATURES:</div>
          <div className="section-subtitle">
            Algumas das importantes features do cima.
          </div>
          {data.features.map(f => {
            return (
              <FeatureEntry
                icon={f.icon}
                title={f.title}
                text={f.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Features;
