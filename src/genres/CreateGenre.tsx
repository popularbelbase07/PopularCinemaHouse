import { Field, Form, Formik } from "formik";
//import { Link, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../Utils/Button";

export default function CreateGenre(){
   // const history = useHistory();

    return (
        <>
        <h3>Create Genre</h3>
        <Formik initialValues={{name: ''}}
        onSubmit={ value => {
            console.log(value);
        }}>

            <Form>
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <Field name = "name" id ="name" className = "form-control"/>
                </div>
                <Button type="submit">Save</Button>
                <Link className="btn btn-secondary" to="/genres">Cancle</Link>
            </Form>


        </Formik>


{/*
        <Button onClick={() => {
            // saving in the database
           // history.push('/genres');
        }}>Save Changes</Button>
    */}
        </>
    )
}