import axios from "axios";
import { getToken } from "../auth/handleJWT";

//Http request we do from axios
export default function configureInterceptor(){
    axios.interceptors.request.use(
        function(config){
            const token = getToken();

            if(token){
                //put the token in Authorization
                config.headers.Authorization = `bearer ${token}`
            }
            return config;

        },
        function(error){
            return Promise.reject(error);
        }
    )
}