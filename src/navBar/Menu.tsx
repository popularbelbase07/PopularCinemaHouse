import { Link, NavLink } from "react-router-dom";
import AuthenticationContext from "../auth/AuthenticationContext";
import Authorization from "../auth/Authorization";
import { logout } from "../auth/handleJWT";
import Button from "../Utils/Button";
import logo from "./Oracle Cinema.gif";
import { useContext } from "react";

export default function Menu() {
  const { update, claims } = useContext(AuthenticationContext);

  function getUserEmail(): string {
    return claims.filter((x) => x.name === "email")[0]?.value;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-danger" to="/">
          <img
            style={{ height: "50px", width: "150px" }}
            src={logo}
            alt="Oracle Cinema"
          />{" "}
        </NavLink>
        <div 
          className="collapse navbar-collapse "
          style={{ display: "flex", justifyContent: "space-between" }}
        >
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

                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-success"
                      to={"/users"}
                    >
                     Users
                    </NavLink>
                  </li>
                </>
              }
            />
          </ul>

          <div className="d-flex">
            <Authorization
              authorized={
                <>
                  <span className="nav-link"> Hello, {getUserEmail()}</span>
                  <Button
                    className="nav-link btn btn-link"
                    onClick={() => {
                      logout();
                      update([]);
                    }}
                  >
                    Log out
                  </Button>
                </>
              }
              notAuthorized={
                <>
                  <Link to="/register" className="nav-link btn btn-link">                   
                    Register
                  </Link>
                  <Link to="/login" className="nav-link btn btn-link">                    
                    Login
                  </Link>
                </>
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
