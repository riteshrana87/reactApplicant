import React, { Component } from "react";
import "./Header.scss";
import Toolbar from "../Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false
    };
    this.drawerToogleClickHandler = this.drawerToogleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
  }

  drawerToogleClickHandler() {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });

  }

  backdropClickHandler() {
    this.setState({
      sideDrawerOpen: false
    });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div>
        <header className="header">
          <Toolbar drawerClickHandler={this.drawerToogleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        </header>
      </div>
    );
  }
}

export default Header;
