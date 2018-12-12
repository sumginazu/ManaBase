import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import CardsReducer from "./reducer_cards";
import CardInfoReducer from "./reducer_card_info";
import CollectionReducer from "./reducer_collection";

const rootReducer = combineReducers({
  cards: CardsReducer,
  card: CardInfoReducer,
  collection: CollectionReducer,
  form: formReducer
});

export default rootReducer;
