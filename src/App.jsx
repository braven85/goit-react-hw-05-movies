import "./App.css";
import { Outlet } from "react-router-dom";
import HorizontalLine from "./components/HorizonalLine/HorizontalLine";
import NavigationLink from "./components/NavigationLink/NavigationLink";

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <NavigationLink
          link={`/goit-react-hw-05-movies/`}
          description={`Home`}
        />
        <NavigationLink
          link={`/goit-react-hw-05-movies/movies`}
          description={`Movies`}
        />
      </div>
      <HorizontalLine />
      <Outlet />
    </div>
  );
}

export default App;
