import React from "react";
import Logo from "../Logo/Logo";
import LoginMenu from "../LoginMenu/LoginMenu";

function header(props) {
  return (
    <header className="header">
      <div className="header__content">
        <Logo {...props} />
        <LoginMenu />
      </div>
    </header>
  );
}
export default header;
