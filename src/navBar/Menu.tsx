// import { NavLink } from "react-router-dom";

export default function Menu(){
    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">                
                    <a className="navbar-brand text-danger" href="/"> <h1> <strong>PCH</strong></h1> </a >
                        <div className="collapse navbar-collapse ">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-4">
                                <li className="nav-item" >
                                    <a  className="nav-link text-success"  href="/genres">
                                        Genres
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a  className="nav-link text-success" href="/movies/filter">
                                        Filter Movies
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a  className="nav-link text-success" href="/actors">
                                        Actors
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a  className="nav-link text-success" href="/movietheaters">
                                        Movie Theaters
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a  className="nav-link text-success" href="/movies/create">
                                        Create a Movie
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                </div>
            </nav>

    )
}