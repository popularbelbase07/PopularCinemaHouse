import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link, useParams } from "react-router-dom";
import { urlMovies, urlRatings } from "../endpoints";
import Loading from "../Utils/Loading";
import coordinateDTO from "../Utils/MapContainer/coordinates.model";
import Map from "../Utils/MapContainer/Map";
import Ratings from "../ratings/Rating";
import { movieDTO } from "./Movies.Model";
import Swal from "sweetalert2";

export default function MovieDetails() {
  const { id }: any = useParams();
  const [movie, setMovie] = useState<movieDTO>();

  useEffect(() => {
    axios
      .get(`${urlMovies}/${id}`)
      .then((response: AxiosResponse<movieDTO>) => {
        //Format our release date field
        response.data.releaseDate = new Date(response.data.releaseDate);
        setMovie(response.data);
        //console.log(response.data);
      });
  }, [id]);

  /* Transfer url of Trailer into embadded videos of youtube*/
  function generateEmbeddedVideoURL(trailer: string): string {
    
    if (!trailer) {
      return '';
    }
    let videoId = trailer.split('v=')[1];   
   const ampersandPosition = videoId.indexOf('&');
  
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // Rating the movies
  function handleRateFunction(rate: number){
axios.post(urlRatings, {rating: rate, movieId: id})
.then(() => {
  Swal.fire({icon: 'success', title: 'The given rating is recieved'});
})

  }
  /* Transfermation of coordinates in Map*/
  function transformCoordinates(): coordinateDTO[] {
    if (movie?.movieTheaters) {
      const coordinates = movie.movieTheaters.map((MovieTheaters) => {
        return {
          latitude: MovieTheaters.latitude,
          longitude: MovieTheaters.longitude,
          name: MovieTheaters.name,
        } as coordinateDTO;
      });
      return coordinates;
    }
    return [];
  }

  return movie ? (
    <div>
      {/* Display Title or Name of the movie and Released date*/}
      <div style={{color:'#000080'}}
      className="progress-bar progress-bar-striped progress-bar-animated">
      <h1>{movie.title}</h1>
      </div>
      <hr></hr>
      {/* Display Genres*/}
      {movie.genres?.map((genre) => (
        <Link
          key={genre.id}
          style={{ marginRight: "10px" }}
          className="btn btn-primary btn-sm rounded-pill"
          to={`/movies/filter?genreId=${genre.id}`}
        >
          {genre.name}
        </Link>
      ))}
      | {movie.releaseDate.toDateString()} | Your Rate : <Ratings 
      maxmiunValue={5} 
      selectedValue={movie.userVote}
    OnChange = {handleRateFunction}/> | Overall Rating : {movie.avarageVote}
      {/* Display poster*/}
      <div style={{ display: "flex", marginTop: "1rem" }}>
        <span style={{ display: "inline-block", marginRight: "1rem" }}>
          <img
            src={movie.poster}
            style={{ width: "300", height: "250px" }}
            alt="poster"
          />
        </span>

        {/* Transfer url of Trailer into embedded videos of youtube using Iframe*/}
        {movie.trailer ? (
          <div>
            <iframe
              title="youtube Trailer"
              width="700"
              height="350"
              src={generateEmbeddedVideoURL(movie.trailer)}
              frameBorder={0}
              data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : null}
        {/* Display Summary of the movie*/}
      </div>
      {movie.summary ? (
        <div>
          <h3>
            <b>Summary</b>{" "}
          </h3>
          <hr></hr>
          <div>
            <ReactMarkdown>{movie.summary}</ReactMarkdown>
          </div>
        </div>
      ) : null}
      {/* Display Actors and their characters of the movie*/}
      {movie.actors && movie.actors.length > 0 ? (
        <div style={{ marginTop: "1rem" }}>
          <h3>
            <b>Actors</b>{" "}
          </h3>
          <hr></hr>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {movie.actors?.map((actor) => (
              <div key={actor.id} style={{ marginBottom: "3px" }}>
                <img
                  alt="pic"
                  src={actor.picture}
                  style={{
                    width: "120px",
                    height: "75px",
                    verticalAlign: "middle",
                  }}
                />
                <span
                  style={{
                    display: "inline-block",
                    width: "200px",
                    marginLeft: "1rem",
                    color: "Green",
                  }}
                >
                  <b>{actor.name}</b>
                </span>

                <span
                  style={{
                    display: "inline-block",
                    width: "200px",
                    color: "orange",
                  }}
                >
                  <h6>Character's Name</h6>
                </span>
                <span style={{ color: "blue" }}>
                  <i>{actor.character}</i>
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {/* Display Movie Theaters and map */}
      <br />
      {movie.movieTheaters && movie.movieTheaters.length > 0 ? (
        <div>
          <h3>
            <b>Showing Movie Theaters</b>{" "}
          </h3>
          <hr></hr>
          {/* Display The movie theaters and do not allow the movement of marker using readonly state*/}
          <Map coordinates={transformCoordinates()} readOnly={true} />
        </div>
      ) : null}
    </div>
  ) : (
    <Loading />
  );
}
