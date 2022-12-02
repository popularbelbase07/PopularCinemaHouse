import { movieDTO } from "./Movies.Model";
import css from './IndividualMovie.module.css';

export default function IndividualMovie(props: movieDTO){

    const runLink = () => `/movie/${props.id}`



    return(

        <div className={css.div}>
                <a href={runLink()}>
                    <img alt = "Poster" src= {props.poster}/>
                </a>
                <p>
                    <a href={runLink()}>{props.title}</a>
                </p>

        </div>
    )
}