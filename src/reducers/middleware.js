import { data, error, loading } from "../actions/actions";

export const asyncFunctionMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  return next(action);
};

export const fetchSomeData = async (dispatch) => {
  dispatch(loading());
  try {
    const response = await fetch("https://swapi.dev/api/films").then((res) =>
      res.json()
    );
    dispatch(data(response.results));
  } catch (err) {
    dispatch(error(err));
  }
};
