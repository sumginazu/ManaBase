import axios from "axios";

export const SEARCH_CARD = "search_card";
export const SEARCH_CARDS = "search_cards";
export const FLIP_CARD = "flip_card";
export const FETCH_COLLECTION = "fetch_collection";

const SCRYFALL_URL = "https://api.scryfall.com";
// AWS Server URL: http://manabasebeanstalk-env.hqbrvuurp5.us-west-1.elasticbeanstalk.com
// Local Server URL: localhost:8000
const SERVER_URL =
  "http://manabasebeanstalk-env.hqbrvuurp5.us-west-1.elasticbeanstalk.com";

const sampleCardSFId = "937dbc51-b589-4237-9fce-ea5c757f7c48";

export function searchCard(term) {
  const request = axios.get(`${SCRYFALL_URL}/cards/named?fuzzy=${term}`);

  return {
    type: SEARCH_CARD,
    payload: request
  };
}

export function searchCards(term) {
  const request = axios.get(`${SCRYFALL_URL}/cards/search?q=${term}`);

  return {
    type: SEARCH_CARDS,
    payload: request
  };
}

export function flipCard(flipped) {
  var request;
  if (!flipped) {
    request = { flipped: true };
  } else {
    request = { flipped: false };
  }
  return {
    type: FLIP_CARD,
    payload: request
  };
}

export function fetchCollection() {
  const request = axios.get(`${SERVER_URL}/collection`);

  return {
    type: FETCH_COLLECTION,
    payload: request
  };
}
