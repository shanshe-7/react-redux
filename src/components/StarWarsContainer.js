import { connect } from "react-redux";
import { fetchSomeData } from "../reducers/middleware";
import StarWars from "./StarWars";
import { createSelector } from "reselect";

const mapDispatchToProps = (dispatch, own) => {
  return {
    getFilms: () => dispatch(fetchSomeData),
  };
};

const mapStateToProps = (st) => {
  const dat1 = () => Math.floor(Math.random() * 30);

  const name = createSelector(dat1, (one) => {
    return one + 10;
  });
  return {
    data: st.starWars.data,
    isLoading: st.starWars.isLoading,
    name: name(),
  };
};

export const StarWarsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarWars);
