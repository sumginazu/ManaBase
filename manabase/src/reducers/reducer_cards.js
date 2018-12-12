import _ from "lodash";
import { SEARCH_CARDS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case SEARCH_CARDS:
      // Scryfall API returns an object with additional info along with the
      // list of cards under the key "data"
      return _.mapKeys(action.payload.data.data, "id");
    default:
      return state;
  }
}
