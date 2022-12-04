import { Form, Formik } from "formik";
//import { Link, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../Utils/Button";
import * as Yup from "yup";
import TextField from "../forms/TextField";

export default function CreateGenre() {
  // const history = useHistory();

  return (
    <>
      <h3>Create Genre</h3>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(value) => {
          console.log(value);
        }}
        // Installation of Yup for validation of the form
        validationSchema={Yup.object({
          name: Yup.string()
            .required("This field is required !!!")
            .firstLetterUppercase(),
        })}
      >
        <Form>
          <TextField field="name" displayName="Name" />
          <Button type="submit">Save</Button>
          <Link className="btn btn-secondary" to="/genres">
            Cancle
          </Link>
        </Form>
      </Formik>

      {/*
        <Button onClick={() => {
            // saving in the database
           // history.push('/genres');
        }}>Save Changes</Button>
    */}
    </>
  );
}
