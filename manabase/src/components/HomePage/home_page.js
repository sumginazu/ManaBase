import React, { Component } from "react";
import { connect } from "react-redux";

import NavBar from "../nav_bar";

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(HomePage);
