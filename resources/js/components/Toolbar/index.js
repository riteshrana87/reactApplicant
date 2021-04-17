import React, { Component } from "react";
import "./Toolbar.scss";
import ToggleSideButton from "../SideDrawer/ToogleSideButton.js";

class Toolbar extends Component {
  render() {
    const { drawerClickHandler } = this.props;
    return (
      <nav className="toolbar__navigation">
        <div className="toolbar__toogle-button">
          <ToggleSideButton click={drawerClickHandler} />
        </div>
        <div className="toolbar__logo">Logo</div>

        <div className="spacer" />
        <ul className="toolbar__navigation-items">

          <li className="toolbar__navigation-item">
            <a
              className="toolbar__navigation-itemlink"
              href="http://localhost:8000/login"
              target="blank"
            >
              Admin Login
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Toolbar;
