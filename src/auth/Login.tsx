import axios from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { urlAccount } from "../endpoints";
import DisplayError from "../Utils/DisplayError";
import { authenticationResponse, userCredentials } from "./auth.models";
import AuthenticationContext from "./AuthenticationContext";
import AuthForm from "./AuthForm";
import { getClaims, saveToken } from "./handleJWT";

export default function Login() {
  const [errors, setErrors] = useState<string[]>([]);
  const { update } = useContext(AuthenticationContext);
  const history = useHistory();

  async function login(credentials: userCredentials) {
    try {
      setErrors([]);
      const response = await axios.post<authenticationResponse>(
        `${urlAccount}/login`,
        credentials
      );
      //Passing Jwt Token
      saveToken(response.data);
      update(getClaims());
     history.push('/')
    } catch (error) {
      setErrors(errors);
    }
  }
  return (
    <>
      <h3>Login</h3>
      <DisplayError errors={errors} />
      <AuthForm
        model={{ email: "", password: "" }}
        onSubmit={async (values) => await login(values)}
       
      />
    </>
  );
}
