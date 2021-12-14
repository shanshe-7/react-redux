import { Routes, Route } from "react-router";
import { NavLink } from "react-router-dom";
import Counter from "./components/Counter";

import "./app.css";
import { StarWarsContainer } from "./components/StarWarsContainer";

function App() {
  return (
    <>
      <nav>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "green" } : { color: "black" }
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "green" } : { color: "black" }
          }
          to="/start-wars"
        >
          Star wars
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/start-wars" element={<StarWarsContainer />} />
      </Routes>
    </>
  );
}

export default App;
