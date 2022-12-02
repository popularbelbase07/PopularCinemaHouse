
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexGenres from "./genres/IndexGenres";
import LandingMoviesPage from "./movies/LandingMoviesPage";
import Menu from "./navBar/Menu";

function App() {
 

  return (
    <BrowserRouter>
      <Menu />
      <div className="container">
        <Switch>
          <Route exact path="/"> <LandingMoviesPage/> </Route>
          <Route path="/genres"> <IndexGenres /> </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
