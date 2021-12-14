import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { counterReducer } from "../reducers/counterReducer";
import { asyncFunctionMiddleware } from "../reducers/middleware";
import { starWarsReducer } from "../reducers/starWarsReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  starWars: starWarsReducer,
});

const devToolsEnhancer = () =>
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(asyncFunctionMiddleware), devToolsEnhancer())
);
