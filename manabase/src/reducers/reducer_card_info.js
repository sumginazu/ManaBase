import { FLIP_CARD } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FLIP_CARD:
      return action.payload;
    default:
      return state;
  }
}
