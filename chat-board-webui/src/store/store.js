import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import ChatBoardReducer from "./reducer";

const store = createStore(
  ChatBoardReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
);

export default store;
