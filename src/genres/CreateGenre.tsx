import { Form, Formik } from "formik";
//import { Link, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../Utils/Button";
import * as Yup from "yup";
import TextField from "../forms/TextField";
import GenresForm from "./GenresForm";

export default function CreateGenre() {
  // const history = useHistory();

  return (
    <>
      <h3>Create Genre</h3>
      <GenresForm
        model={{ name: "" }}
        onSubmit={async (value) => {
          await new Promise((r) => setTimeout(r, 1000));
          console.log(value);
        }}
      />
    </>
  );
}
