import { NavLink } from "react-router-dom";

export default function Menu(){
    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">                
                    <NavLink className="navbar-brand text-danger" to="/"> <h1> <strong>PCH</strong></h1> </NavLink >
                        <div className="collapse navbar-collapse ">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-4">
                                <li className="nav-item" >
                                    <NavLink  className="nav-link text-success" to={"/genres"}>
                                        Genres
                                    </NavLink>
                                </li>                               
                                <li className="nav-item">
                                    <NavLink  className="nav-link text-success" to={"/actors"}>
                                        Actors
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-success" to={"/movietheaters"}>
                                        Movie Theaters
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-success" to={"/movies/create"}>
                                        Create a Movie
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink  className="nav-link text-success" to={"/movies/filter"}>
                                        Filter Movies
                                    </NavLink>
                                </li>
                                
                            </ul>
                        </div>
                </div>
            </nav>

    )
}