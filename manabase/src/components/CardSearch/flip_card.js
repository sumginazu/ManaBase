import React, { Component } from "react";
import { connect } from "react-redux";

import { flipCard } from "../../actions";

class FlipCard extends Component {
  render() {
    var card = this.props.card;

    if (!this.props.cardInfo.flipped) {
      return (
        <div>
          <button
            className='card-face-flip btn-secondary'
            onClick={this.flipCard.bind(this)}
          >
            Flip
          </button>
          <img src={card.card_faces[0].image_uris.small} />
          <div>{card.name}</div>
        </div>
      );
    } else {
      return (
        <div>
          <button
            className='card-face-flip btn-secondary'
            onClick={this.flipCard.bind(this)}
          >
            Flip
          </button>
          <img src={card.card_faces[1].image_uris.small} />
          <div>{card.name}</div>
        </div>
      );
    }
  }

  flipCard() {
    this.props.flipCard(this.props.cardInfo.flipped);
  }
}

function mapStateToProps(state) {
  return { cardInfo: state.card, cards: state.cards };
}

export default connect(
  mapStateToProps,
  { flipCard }
)(FlipCard);
