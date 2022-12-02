import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./Movies.Model";
import css from "./MoviesList.module.css";


export default function MovieList(props: MoviesListProps) {
  return (
    <div className={css.div}>
        {props.movies?.map((movie) => (
          <IndividualMovie {...movie} key={movie.id} />
        ))}
      </div>

  )

}

interface MoviesListProps {

  movies?: movieDTO[];
}
