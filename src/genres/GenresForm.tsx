import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../Utils/Button";
import * as Yup from "yup";
import { GenreCreationDTO } from "./Genres.model";

// eslint-disable-next-line import/no-anonymous-default-export
export default function GenreForm(props: genreFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={
        
        props.onSubmit
    }
      // Installation of Yup for validation of the form
      validationSchema={Yup.object({
        name: Yup.string()
          .required("This field is required !!!").max(50,'Maxmium length is 50 characters')
          .firstLetterUppercase(),
      })}
    >
      {/* The user would double chick the save button and run the submit or 
      save twice so, we should disable the click  utton twice at the time 
      * We can get the information when we click twice the form is already submitted"
      */}
      {(formikProps) => (
        <Form>
          <TextField field="name" displayName="Name" />
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


interface genreFormProps {
    model: GenreCreationDTO;
    onSubmit(values: GenreCreationDTO, action: FormikHelpers<GenreCreationDTO>): void;
}







/*
        <Button onClick={() => {
            // saving in the database
           // history.push('/genres');
        }}>Save Changes</Button>
    */
