import React from "react";
import logo from "..//assets/logo.svg";

class Logo extends React.Component {
  render() {
    return (
      <div>
        <img
          className="main-logo"
          alt="meet landing page logo"
          src={logo}
        ></img>
      </div>
    );
  }
}

export default Logo;
