import React from "react";

function WhoDude({ who }) {
  return (
    <div className="col-6 who-dude-container">
      <a href={who.link} className="who-link">
        <img className="who-avatar" src={who.avatar.url} />
        <div className="who-name">{who.name}</div>
        <div className="who-description">{who.description}</div>
      </a>
    </div>
  );
}

export default WhoDude;
