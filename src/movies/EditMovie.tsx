import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { urlMovies } from "../endpoints";
import { convertMovieToFormData } from "../Utils/actorFormDataUtils";
import DisplayError from "../Utils/DisplayError";
import Loading from "../Utils/Loading";
import MovieForm from "./MovieForm";
import { movieCreationDTO, moviePutGetDTO } from "./Movies.Model";

export default function EditMovie() {
  const { id }: any = useParams();
  const [movie, setMovie] = useState<movieCreationDTO>();
  const [moviePutGet, setMoviePutGet] = useState<moviePutGetDTO>();
  const history = useHistory();
  const [errors, setError] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get(`${urlMovies}/PutGet/${id}`)
      .then((response: AxiosResponse<moviePutGetDTO>) => {
        const model: movieCreationDTO = {
            //Creating transformation of the attributes
          title: response.data.movie.title,
          inTheaters: response.data.movie.inTheaters,
          trailer: response.data.movie.trailer,
          posterURL: response.data.movie.poster,
          summary: response.data.movie.summary,
          releaseDate: new Date(response.data.movie.releaseDate) 
        };
        setMovie(model);
        setMoviePutGet(response.data);
      });
  }, [id]);

  async function edit(movieToEdit: movieCreationDTO) {
    try {
      const formData = convertMovieToFormData(movieToEdit)
      await axios({
        method: "put",
        url: `${urlMovies}/${id}`, 
        data: formData,
        headers: {"Content-Type": "multipart/form-data"}
      });
      history.push(`/movies/${id}`);
    } catch (error) {
      if (error) {
        setError(errors);
      }
    }
  }

  return (
    <>
      <h3>Edit Movie</h3>
      <DisplayError errors={errors} />

      {movie && moviePutGet ? (
        <MovieForm
                  model={movie}
                  onSubmit= { async values=> await edit(values)}
                  selectedGenres={moviePutGet.selectedGenres} 
                  nonSelectedGenres={moviePutGet.nonSelectedGenres} 
                  selectedMovieTheaters={moviePutGet.selectedMovieTheaters} 
                  nonSelectedMovieTheaters={moviePutGet.nonSelectedMovieTheaters}
                  selectedActors={moviePutGet.actors}          
        />
      ) : (
        <Loading />
      )}
    </>
  );
}
