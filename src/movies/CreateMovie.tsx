import { genreDTO } from "../genres/Genres.model";
import MovieForm from "./MovieForm";

export default function CreateMovie(){
// In the case of create a movie.The should not have any selectedGenres bydefault
const nonSelectedGenres: genreDTO[] = [{id:1, name: 'Comedy'}, {id:2, name: 'Drama'} ]

    return(
        <>
        <h3>Create Movie</h3>
        <MovieForm
        model = {{title: '', inTheaters:false, trailer: ''}}
        onSubmit={values => console.log(values)}
        nonSelectedGenres = {nonSelectedGenres}
        selectedGenres = {[]}
        />
       
        </>
    )
}