import React from "react";

const StarWars = ({ data, isLoading, getFilms, name = "not name" }) => {
  console.log(name);
  return (
    <div>
      <button style={{ marginBottom: "20px" }} onClick={() => getFilms()}>
        get films
      </button>

      {isLoading ? (
        <div>Loading... </div>
      ) : data.length ? (
        data.map((film) => (
          <section key={film.title}>
            <h2>{film.title}</h2>
            <p>{film.opening_crawl}</p>
          </section>
        ))
      ) : null}
    </div>
  );
};

export default StarWars;
