import { connect } from "react-redux";
import { fetchSomeData } from "../reducers/middleware";
import StarWars from "./StarWars";

const mapDispatchToProps = (dispatch, own) => {
  return {
    getFilms: () => dispatch(fetchSomeData),
  };
};

const mapStateToProps = (store) => {
  const name = "shanshe";
  return {
    data: store.starWars.data,
    isLoading: store.starWars.isLoading,
    name,
  };
};

export const StarWarsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarWars);
