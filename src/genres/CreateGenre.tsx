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
        onSubmit={ async value => {
          // When the form is posted 
          await new Promise(r => setTimeout(r, 1000))
          console.log(value);
        }}
        // Installation of Yup for validation of the form
        validationSchema={Yup.object({
          name: Yup.string()
            .required("This field is required !!!")
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
<Button  disabled= {formikProps.isSubmitting} type="submit">Save</Button>
<Link className="btn btn-secondary" to="/genres">
  Cancle
</Link>
</Form>

)}
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
