import React from "react";

function WhoDude({ who }) {
  return (
    <div className="col-6 who-dude-container">
      <img className="who-avatar" src={who.avatar.url} />
      <div className="who-name">{who.name}</div>
      <div className="who-description">{who.description}</div>
      <div className="who-links">
        <a href={who.link}>Check him out.</a>
      </div>
    </div>
  );
}

export default WhoDude;
