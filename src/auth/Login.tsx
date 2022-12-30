import axios from "axios";
import { FormikHelpers } from "formik";
import { useState } from "react";
import { urlAccount } from "../endpoints";
import DisplayError from "../Utils/DisplayError";
import { authenticationResponse, userCredentials } from "./auth.models";
import AuthForm from "./AuthForm";

export default function Login(){

    const [errors, setErrors] = useState<string[]>([])


    async function login(credentials: userCredentials){
        try{
            setErrors([]);
            const response = await axios
            .post<authenticationResponse>(`${urlAccount}/login`, credentials);
            console.log(response.data);
        }
        catch(error){
        setErrors(errors)
        }
    }
    return(
        <>
        <h3>Login</h3>
        <DisplayError errors={errors}/>
        <AuthForm model={{email: '', password:''}} onSubmit={
            async values => await login(values)
            }/>
        </>
    )
}