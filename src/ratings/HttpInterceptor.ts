import axios from "axios";
import { getToken } from "../auth/handleJWT";

export default function HttpConfigureInterceptor(){
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