import { genreDTO } from "../genres/Genres.model";
import { movieTheaterDTO } from "../movieTheaters/MovieTheater.model";
import MovieForm from "./MovieForm";

export default function CreateMovie(){
// In the case of create a movie.The should not have any selectedGenres bydefault
const nonSelectedGenres: genreDTO[] = [{id:1, name: 'Comedy'}, {id:2, name: 'Drama'} ]

// Same things for movie theaters that helps the moviecan be showing in several cinema houses.
const nonSelectedMovieTheater: movieTheaterDTO[] = [{id:1, name: 'Supa Deurali'}, {id:2, name: 'Jay Santoshi Ma'} ]

    return(
        <>
        <h3>Create Movie</h3>
        <MovieForm
        model = {{title: '', inTheaters:false, trailer: ''}}
        onSubmit={values => console.log(values)}
        nonSelectedGenres = {nonSelectedGenres}
        selectedGenres = {[]}

        nonSelectedMovieTheater = {nonSelectedMovieTheater}
        selectedMovieTheaters = {[]}
        selectedActors= {[]}
        />
       
        </>
    )
}