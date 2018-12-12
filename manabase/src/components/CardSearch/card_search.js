import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { searchCards } from "../../actions";

import NavBar from "../nav_bar";
import FlipCard from "./flip_card";

class CardSearch extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <NavBar />
        <div>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label='searchTerm'
              name='searchTerm'
              component={this.textField}
            />
            <div>
              <button type='submit' className='btn btn-primary'>
                Search
              </button>
            </div>
          </form>
          <div />
        </div>
        <ul className='list-group card-list'>{this.renderCards()}</ul>
      </div>
    );
  }

  renderCards() {
    // if (!searchResults) {
    //   return (
    //     <div>
    //       <NavBar />
    //       <SearchBar />
    //     </div>
    //   );
    // }

    return _.map(this.props.cards, card => {
      if (card.card_faces) {
        return (
          <li className='card-item' key={card.id}>
            <FlipCard card={card} />
          </li>
        );
      }
      return (
        <li className='card-item' key={card.id}>
          <div>
            <img src={card.image_uris.small} />
            <div>{card.name}</div>
          </div>
        </li>
      );
    });
  }

  textField(field) {
    return (
      <div>
        <input
          className='form-control'
          type='text'
          value={field.value}
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
    this.props.searchCards(values.searchTerm);
  }
}

function mapStateToProps(state) {
  return { cards: state.cards };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchCards }, dispatch);
}

// export default connect(mapStateToProps)(CardSearch);
export default reduxForm({
  form: "cardSearchForm"
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CardSearch)
);
