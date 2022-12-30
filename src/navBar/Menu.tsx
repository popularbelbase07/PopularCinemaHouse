import { NavLink } from "react-router-dom";
import Authorization from "../auth/Authorization";
import logo from "./Oracle Cinema.gif";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-danger" to="/">
          <img style={{ height: "50px", width: "150px" }} src={logo} alt="Oracle Cinema" />{" "}
        </NavLink>
        <div className="collapse navbar-collapse ">
          <ul className="navbar-nav me-auto mb-2 mb-lg-4">
            <li className="nav-item">
              <NavLink className="nav-link text-success" to={"/movies/filter"}>
                Filter Movies
              </NavLink>
            </li>
            <Authorization
              role="admin"
              authorized={
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link text-success" to={"/genres"}>
                      Genres
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-success" to={"/actors"}>
                      Actors
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-success"
                      to={"/movietheaters"}
                    >
                      Movie Theaters
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-success"
                      to={"/movies/create"}
                    >
                      Create a Movie
                    </NavLink>
                  </li>
                </>
              }
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
