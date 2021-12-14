import { ERROR, DATA, LOADING } from "../actions/actions";

export const initialState = { data: [], isLoading: false };

export const starWarsReducer = (state = initialState, { type, payload }) => {
  if (type === LOADING) {
    return { ...state, isLoading: true };
  }
  if (type === ERROR) {
    return { ...state, data: payload, isLoading: false };
  }
  if (type === DATA) {
    return { ...state, data: payload, isLoading: false };
  }
  return state;
};
