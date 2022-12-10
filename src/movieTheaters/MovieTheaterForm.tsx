import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../Utils/Button";
import { MovieTheaterCreationDTO } from "./MovieTheater.model";
import * as Yup from "yup";
import Map from "../Utils/MapContainer/Map";
import MapField from "../forms/MapField";
import coordinateDTO from "../Utils/MapContainer/coordinates.model";

export default function MovieTheaterForm(props: movieTheaterForm) {

  function transformCoordinates(): coordinateDTO[] | undefined {
    if (props.model.latitude && props.model.longitude) {
      const response: coordinateDTO = {
        langitude: props.model.longitude,
        latitude: props.model.latitude,
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
