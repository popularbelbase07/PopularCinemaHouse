import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { urlMovies } from "../endpoints";
import { genreDTO } from "../genres/Genres.model";
import { movieTheatersDTO } from "../movieTheaters/MovieTheater.model";
import { convertMovieToFormData } from "../Utils/actorFormDataUtils";
import DisplayError from "../Utils/DisplayError";
import Loading from "../Utils/Loading";
import MovieForm from "./MovieForm";
import { movieCreationDTO, moviePostGetDTO } from "./Movies.Model";

 export default function CreateMovie(){

    const[errors, setErrors] = useState<string[]>([]);
    const [nonSelectedGenres , setNonSelectedGenres] = useState<genreDTO[]>([]);
    const [nonSelectedMovieTheater, setNonSelectedMovieTheaters] = useState<movieTheatersDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();



    useEffect(() => {
        axios.get(`${urlMovies}/postget`)
        .then((response: AxiosResponse<moviePostGetDTO>) => {
            setNonSelectedGenres(response.data.genres);
            setNonSelectedMovieTheaters(response.data.movieTheaters);
            setLoading(false);

        });
        }, []);
   
    async function create(movie: movieCreationDTO){
         try{
             const formData = convertMovieToFormData(movie);
             const response =  await axios({
                 method: 'post',
                 url: urlMovies,
                 data: formData,
                 headers: {'Content-Type': 'multipart/form-data',
                 'Accept': 'multipart/form-data' }
             })

             history.push(`/movies/${response.data}`)

         }
         catch(error){
        // setErrors(error.response.data)
        setErrors(errors)
         }
         
     }

     
     return(
         <>
        <h3>Create Movie</h3>
         <DisplayError errors={errors}/>
         {loading ? <Loading/> : 
             <MovieForm
             model={{title: '', inTheaters: false, trailer: ''}}
             onSubmit = {async values => await create(values)}
             nonSelectedGenres= {nonSelectedGenres}
             selectedGenres= {[]}
             nonSelectedMovieTheater = {nonSelectedMovieTheater}
             selectedMovieTheaters= {[]}
             selectedActors ={[]}
             
             />
         }
       
         </>
     )
}



/*

export default function CreateMovie(){
// In the case of create a movie.The should not have any selectedGenres by default
const nonSelectedGenres: genreDTO[] = [{id:1, name: 'Comedy'}, {id:2, name: 'Drama'} ]

// Same things for movie theaters that helps the movie can be showing in several cinema houses.
const nonSelectedMovieTheater: movieTheatersDTO[] = [{id:1, name: 'Supa Deurali'}, {id:2, name: 'Jay Santoshi Ma'} ]

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
*/