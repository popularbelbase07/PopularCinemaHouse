import { Form, Formik, FormikHelpers } from "formik";
import { userCredentials } from "./auth.models";
import * as Yup from "yup";
import TextField from "../forms/TextField";
import Button from "../Utils/Button";
import { Link } from "react-router-dom";

export default function AuthForm(props: authFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        email: Yup.string()
          .required("This field is Required !!")
          .email("You must insert the valid email"),
        password: Yup.string()
          .required("This field is required !!!!"),
      })}      
    >
      {(formikProps) => (
        <Form>
          <TextField field={"email"} displayName={"Email"}  />
          <TextField
            field={"password"}
            displayName={"Password"}
            type={"password"}
            autocomplete={"current-password"}
          />

          <Button disabled={formikProps.isSubmitting} type="submit">
            {props.children}
          </Button>
          <Link className="btn btn-secondary btn-rounded btn-floating btn-sm " to={"/"}>
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface authFormProps {
  children?: React.ReactNode;
  model: userCredentials;
  onSubmit(
    values: userCredentials,
    actions: FormikHelpers<userCredentials>
  ): void;
}
