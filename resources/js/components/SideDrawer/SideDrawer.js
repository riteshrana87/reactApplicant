import React, { Component } from "react";
import "./SideDrawer.scss";

class SideDrawer extends Component {
  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <nav className={drawerClasses}>

        <ul className="sideDrawer__navigation-items">
          <li className="sideDrawer__navigation-item">
            <a
              className="sideDrawer__navigation-itemlink"
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

export default SideDrawer;
