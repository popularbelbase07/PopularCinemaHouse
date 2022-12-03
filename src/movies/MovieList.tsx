import GenericList from "../Utils/GenericList";
import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./Movies.Model";
import css from "./MoviesList.module.css";


export default function MovieList(props: MoviesListProps) {
    return(
      <GenericList list={props.movies}>
       
          <div className={css.div}>
            {props.movies?.map((movie) => (
              <IndividualMovie {...movie} key={movie.id} />
            ))}
          </div>
              </GenericList>
      ) 

}
interface MoviesListProps {

  movies?: movieDTO[];
}
