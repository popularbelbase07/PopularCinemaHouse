import { ErrorMessage, Field } from "formik";

export default function TextField(props: TextFieldProps){
    return (

        <div className="mb-3">
        <label htmlFor={props.field}>{props.displayName}</label>
        <Field type = {props.type}
         name={props.field} id={props.field} className="form-control" />
        <ErrorMessage name="name">
          {(msg) => <div className="text-danger">{msg}</div>}
        </ErrorMessage>
      </div>
    )
}
interface TextFieldProps{
    field: string;
    displayName: string
    type: 'text' | 'password';
}

TextField.defaultProps = {
  type: 'text'
}

/*
// Before refinement

  <div className="mb-3">
            <label htmlFor="name">Name</label>
            <Field name="name" id="name" className="form-control" />
            <ErrorMessage name="name">
              {(msg) => <div className="text-danger">{msg}</div>}
            </ErrorMessage>
          </div>

          */