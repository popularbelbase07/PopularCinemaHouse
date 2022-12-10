import { genreDTO } from "../genres/Genres.model"
import { movieTheaterDTO } from "../movieTheaters/MovieTheater.model"
import MovieForm from "./MovieForm"

export default function EditMovie(){

    // In the case of Edit a movie.The should have any selectedGenres bydefault
    // In the case of create a movie.The should not have any selectedGenres bydefault
const nonSelectedGenres: genreDTO[] = [ {id:2, name: 'Drama'} ]
const selectedGenres: genreDTO[] = [{id:1, name: 'Comedy'}]

// Same things for movie theaters that helps the moviecan be showing in several cinema houses.
const nonSelectedMovieTheater: movieTheaterDTO[] = [{id:1, name: 'Supa Deurali'} ]
const selectedMovieTheater: movieTheaterDTO[] = [{id:2, name: 'Jay Santoshi Ma'} ]

    return(
        <>
       <h3>Edit Movie</h3>
       <MovieForm
        model = {{title: 'Gladiator', inTheaters:true, trailer: 'url',
    releaseDate: new Date('1998-01-01T00:00:00')
    }}
        onSubmit={values => console.log(values)}
        nonSelectedGenres= {nonSelectedGenres}
        selectedGenres = {selectedGenres}   
        
        nonSelectedMovieTheater= {nonSelectedMovieTheater}
        selectedMovieTheaters = {selectedMovieTheater}
        />
       
        </>
    )
}