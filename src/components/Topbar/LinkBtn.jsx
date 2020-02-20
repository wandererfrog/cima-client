import React from "react";
import { Link } from "react-scroll";

function LinkBtn({ entry, onClick, path }) {
  if (entry.inner) {
    return (
      <div className={`topbar-item-text`}>
        <Link
          activeClass="topbar-item-text-active"
          to={entry.to}
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
        >
          {entry.title.toUpperCase()}
        </Link>
      </div>
    );
  } else {
    return (
      <div onClick={() => onClick(entry.path)} className={`topbar-item-text`}>
        {entry.title.toUpperCase()}
      </div>
    );
  }
}

export default LinkBtn;
