import { movieDTO } from "./Movies.Model";
import css from './IndividualMovie.module.css';
import { Link } from "react-router-dom";

export default function IndividualMovie(props: movieDTO){

    const runLink = () => `/movies/${props.id}`

    return(

        <div className={css.div}>
                <Link to={runLink()}>
                    <img alt = "Poster" src= {props.poster}/>
                </Link>
                <p>
                    <Link to={runLink()}>{props.title}</Link>
                </p>

        </div>
    )
}