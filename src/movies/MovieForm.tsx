import { Form, Formik, FormikHelpers, yupToFormErrors } from "formik";
import { movieCreationDTO } from "./Movies.Model";
import * as Yup from "yup";
import Button from "../Utils/Button";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import CheckBoxField from "../forms/CheckBoxField";

export default function MovieForm(props: movieFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        title: Yup.string()
          .required("This field is required")
          .firstLetterUppercase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Title" field="title" />
          <CheckBoxField displayName="In Theaters" field="inTheaters" />
          <TextField displayName="Trailer" field="trailer" />
          <DateField displayName="Release Date" field="releaseDate" />
          <ImageField
            displayName=" Movie Poster"
            field="poster"
            imageURL={props.model.posterURL}
          />

          <Button disabled={formikProps.isSubmitting} type="submit">
            Save
          </Button>
          <Link className="btn btn-secondary" to="/genres">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}
interface movieFormProps {
  model: movieCreationDTO;
  onSubmit(
    values: movieCreationDTO,
    actions: FormikHelpers<movieCreationDTO>
  ): void;
}
