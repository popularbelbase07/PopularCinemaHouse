import { useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";

export default function Authorization(props: authorizationProps){
const [isAuthorized, setAuthorized] = useState(false);

    return(
        <>
        {isAuthorized ? props.authorized : props.notAuthorized}
        </>
    )

}

interface authorizationProps{
    authorized: ReactElement;
    notAuthorized?: ReactElement;
    Role?: string;
}