import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { urlMovies } from "../endpoints";
import Loading from "../Utils/Loading";
import { movieDTO } from "./Movies.Model";

export default function MovieDetails(){

const {id } : any = useParams();
const [movie, setMovie] = useState<movieDTO>();
   
        useEffect(() => {
            axios.get(`${urlMovies}/${id}`)
            .then((response: AxiosResponse<movieDTO>)=>
            {
                //Format our release date field
            response.data.releaseDate = new Date(response.data.releaseDate)
            setMovie(response.data);
            console.log(response.data);
            })
        }, [id]) 

         /* Transfer url of Trailer into embadded videos of youtube*/
         function generateEmbeddedVideoURL(trailer: string): string
         {
if(!trailer){
    return '';
}
let videoId = trailer.split('v=')[1];
const ampersandPosition = videoId.indexOf('&');
if(ampersandPosition !== -1){
    videoId = videoId.substring(0, ampersandPosition);
}
return `https://www.youtube.com/embed/${videoId}`;
         }

    return(
        movie ? <div>
            <h2>{movie.title} {movie.releaseDate.getFullYear()}</h2>
            {movie.genres?.map(genre => 
                <Link key={genre.id}
                style= {{marginRight:'10px'}}
                className="btn btn-primary btn-sm rounded-pill"
                to={`/movies/filter?genreId=${genre.id}`}
                >
                    {genre.name}
                    </Link>
                    )}
                    | {movie.releaseDate.toDateString()}


              <div style={{display: 'flex', marginTop: '1rem'}} >
                <span style={{display: 'inline-block', marginRight:'1rem'}}>
                    <img src={movie.poster}
                    style= {{width: '300', height: '250px'}}
                    alt = "poster"
                    />
                </span>
                {/* Transfer url of Trailer into embedded videos of youtube using Iframe*/}
                {movie.trailer ? <div>
                <iframe
                title="youtube Trailer"
                width="600"
                height="350"
                src={generateEmbeddedVideoURL(movie.trailer)}
                frameBorder= {0}
                allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                >

                </iframe>

                </div> : null}
                
                </div>      
        </div> : <Loading/>

    )
}