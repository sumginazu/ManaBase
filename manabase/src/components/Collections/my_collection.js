import React, { Component } from "react";
import { connect } from "react-redux";

import NavBar from "../nav_bar";
import { fetchCollection } from "../../actions";

class MyCollection extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    var collection = this.props.collection;
    console.log(collection);

    return (
      <div>
        <NavBar />
        <button onClick={this.fetchCollection.bind(this)}>
          Request your collection
        </button>
        <h1>{collection.message}</h1>
      </div>
    );
  }

  fetchCollection() {
    this.props.fetchCollection();
  }
}

function mapStateToProps(state) {
  return { collection: state.collection };
}

export default connect(
  mapStateToProps,
  { fetchCollection }
)(MyCollection);
