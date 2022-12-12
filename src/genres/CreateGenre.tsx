import { Form, Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
import Button from "../Utils/Button";
import * as Yup from "yup";
import TextField from "../forms/TextField";
import GenresForm from "./GenresForm";
import { GenreCreationDTO } from "./Genres.model";
import axios from "axios";
import { urlGenres } from "../endpoints";

export default function CreateGenre() {
  // Using Axios for HTTP post request
  const history = useHistory();

  async function Create(genre: GenreCreationDTO) {
    try {
      axios.post(urlGenres, genre);
      history.push("/genres");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h3>Create Genre</h3>
      <GenresForm
        model={{ name: "" }}
        onSubmit={async (value) => {
          /*
          await new Promise((r) => setTimeout(r, 1000));
          console.log(value);
          */
          // call the Create Method from the axios post
          await Create(value);
        }}
      />
    </>
  );
}
