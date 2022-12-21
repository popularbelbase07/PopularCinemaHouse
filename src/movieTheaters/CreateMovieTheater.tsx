import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlMovieTheaters } from "../endpoints";
import DisplayError from "../Utils/DisplayError";
import { MovieTheaterCreationDTO } from "./MovieTheater.model";
import MovieTheaterForm from "./MovieTheaterForm";

export default function CreateMovieTheater() {
  const [errors, setErrors] = useState<string[]>([]);
  const history = useHistory();

  async function create(movieTheater: MovieTheaterCreationDTO) {
    try {
      await axios.post(urlMovieTheaters, movieTheater); 
      history.push("/movietheaters");
    } 
    catch (error) {
      if (error) {
        setErrors(errors);
      }
    }
  }

  return (
    <>
      <h3>Create Movie Theater</h3>
      <DisplayError errors={errors} />
      <MovieTheaterForm
        model={{name: ''}}
        onSubmit = {async values => await create(values)}
      />
    </>
  );
}
