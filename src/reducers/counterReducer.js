import { DECREMENT, INCREMENT, SET } from "../actions/actions";

export const initialState = { count: 0 };

export const counterReducer = (state = initialState, { type, payload }) => {
  if (type === INCREMENT) {
    return { ...state, count: state.count + 1 };
  }
  if (type === DECREMENT) {
    return { ...state, count: state.count - 1 };
  }
  if (type === SET) {
    return { ...state, count: payload };
  }
  return state;
};
