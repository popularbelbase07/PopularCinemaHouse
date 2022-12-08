import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../Utils/Button";
import { actorCreationDTO } from "./Actors.model";
import * as Yup from "yup";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import MarkDownField from "../forms/MarkdownField";

export default function ActorForm(props: actorFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      // Validation Scheme added validation on the form
      validationSchema={Yup.object({
        name: Yup.string()
          .required("This field should be Required !! ")
          .firstLetterUppercase(),
        dateOfBirth: Yup.date().nullable().required("This field is required "),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField field={"name"} displayName={"Name"} />
          <DateField displayName="Date Of Birth" field="dateOfBirth" />
          <ImageField displayName="Picture" field="picture" imageURL={props.model.pictureURL}/>
          <MarkDownField displayName="Biography" field="biography"/>


          <Button disabled={formikProps.isSubmitting} type="submit">
            Save Changes
          </Button>
          <Link to="/actors" className="btn btn-secondary">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface actorFormProps {
  model: actorCreationDTO;
  onSubmit(
    values: actorCreationDTO,
    action: FormikHelpers<actorCreationDTO>
  ): void;
}
