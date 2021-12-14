export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const SET = "set";
export const ERROR = "error";
export const DATA = "data";
export const LOADING = "loading";

export const increment = () => {
  return { type: INCREMENT };
};
export const decrement = () => {
  return { type: DECREMENT };
};
export const set = (value) => {
  return { type: SET, payload: value };
};

export const error = (value) => {
  return { type: ERROR, payload: value };
};
export const data = (value) => {
  return { type: DATA, payload: value };
};
export const loading = () => {
  return { type: LOADING };
};
