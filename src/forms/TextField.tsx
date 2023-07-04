import { ErrorMessage, Field } from "formik";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export default function TextField(props: TextFieldProps){
    return (

        <div className="mb-3">
        <label htmlFor={props.field}>{props.displayName}</label>
        <Field type = {props.type}
         name={props.field} id={props.field} className="form-control" />
        <ErrorMessage name="name">
          {(msg: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined) => <div className="text-danger">{msg}</div>}
        </ErrorMessage>
      </div>
    )
}
interface TextFieldProps{
    field: string;
    displayName: string
    type: 'text' | 'password';
    autocomplete?: string;
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