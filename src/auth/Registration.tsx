import axios from "axios";
import { useState } from "react";
import { urlAccount } from "../endpoints";
import DisplayError from "../Utils/DisplayError";
import { authenticationResponse, userCredentials } from "./auth.models";
import AuthForm from "./AuthForm";

export default function Registration() {
const [errors, setErrors] = useState<string[]>([]);

  async function register(credentials: userCredentials) {
    try {
        setErrors([]);
      const response = await axios.post<authenticationResponse>(
        `${urlAccount}/create`, credentials);
      console.log(response.data);
    } catch (error) {
        setErrors(errors);
        console.error(error);
      }
     
        
           
        }
     

  return (
    <>
      <h3>Registration</h3>
      <DisplayError errors={errors} />
      <AuthForm
        model={{ email: "", password: "" }}
        onSubmit={async (values) => await register(values)}
      />
    </>
  );
}
