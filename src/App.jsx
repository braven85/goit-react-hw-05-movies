import "./App.css";
import { NavLink, Outlet } from "react-router-dom";
import HorizontalLine from "./components/HorizonalLine/HorizontalLine";

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <NavLink
          className="navigation__item"
          style={({ isActive }) => {
            return {
              color: isActive ? "#FF0000" : "#000000",
            };
          }}
          to={`/`}
        >
          Home
        </NavLink>
        <NavLink
          className="navigation__item"
          style={({ isActive }) => {
            return {
              color: isActive ? "#FF0000" : "#000000",
            };
          }}
          to={`/movies`}
        >
          Movies
        </NavLink>
      </div>
      <HorizontalLine />
      <Outlet />
    </div>
  );
}

export default App;
