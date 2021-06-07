import React from "react";
import Logo from "../Logo/Logo";

import Navigation from "../Navigation/Navigation";

function HeaderMovie(props) {
  return (
    <header className="HeaderMovie">
      <div className="header__content">
        <Logo {...props} />
        <Navigation />
      </div>
    </header>
  );
}
export default HeaderMovie;
