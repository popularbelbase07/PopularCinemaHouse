import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import MapField from "../forms/MapField";
import TextField from "../forms/TextField";
import Button from "../Utils/Button";
import coordinateDTO from "../Utils/MapContainer/coordinates.model";
import { MovieTheaterCreationDTO } from "./MovieTheater.model";

export default function MovieTheaterForm(props: movieTheaterForm) {

  function transformCoordinates(): coordinateDTO[] | undefined {
    if (props.model.latitude && props.model.longitude) {
      const response: coordinateDTO = {
        latitude: props.model.latitude,
        longitude: props.model.longitude        
      };
      return [response];
    }
    return undefined;
  }

  

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
          <div style={{ marginBottom: "1rem" }}>
            <MapField
              latField="latitide"
              lngField="longitude"
              coordinates={transformCoordinates()}
            />
          </div>

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
