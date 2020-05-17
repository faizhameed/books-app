import { combineReducers } from "redux";
import { actionTypes } from "./types";

const initialState = {
  books: [],
};

function bookReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      if (!state.books.includes(action.payload)) {
        return {
          ...state,
          books: [...state.books, action.payload],
        };
      } else return state;
    default:
      break;
  }
  return state;
}

const rootReducer = combineReducers({
  bookReducer,
});

export default rootReducer;
