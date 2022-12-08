import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../Utils/Button";
import { MovieTheaterCreationDTO } from "./MovieTheater.model";
import * as Yup from "yup";

export default function MovieTheaterForm(props: movieTheaterForm) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("This field is required")
          .firstLetterUppercase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Name" field="name" />

          <Button disabled={formikProps.isSubmitting} type="submit">
            Save
          </Button>
          <Link className="btn btn-secondary" to="/movietheaters">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface movieTheaterForm {
  model: MovieTheaterCreationDTO;
  onSubmit(
    values: MovieTheaterCreationDTO,
    action: FormikHelpers<MovieTheaterCreationDTO>
  ): void;
}
