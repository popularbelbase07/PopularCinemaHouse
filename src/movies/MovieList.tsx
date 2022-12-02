import Loading from "../Utils/Loading";
import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./Movies.Model";
import css from "./MoviesList.module.css";


export default function MovieList(props: MoviesListProps) {

  if(!props.movies){
    return <Loading/>
    }
    else if(props.movies.length === 0){
      return <>There are no movies to display</>
    }
    else{

      return (

        <div className={css.div}>
            {props.movies?.map((movie) => (
              <IndividualMovie {...movie} key={movie.id} />
            ))}
          </div>
    
      )

    }






}

interface MoviesListProps {

  movies?: movieDTO[];
}
