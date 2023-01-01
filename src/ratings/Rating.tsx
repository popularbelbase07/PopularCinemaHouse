import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import AuthenticationContext from "../auth/AuthenticationContext";
import './Ratings.css';

export default function Ratings(props: ratingProps){

    const [maxmiumValues, setMaxmiumValues] =useState<number[]>([])
    const [selectedValue, setSelectedValue] = useState(props.selectedValue);
    const {claims} = useContext(AuthenticationContext);

    useEffect(() => {
        setMaxmiumValues(Array(props.maxmiunValue).fill(0));
    },
    [props.maxmiunValue])

    function handleMouseOver(rate: number){
setSelectedValue(rate);
    }

    function handleClickFunction(rate: number){
const userIsLoggedIn = claims.length > 0;
if(!userIsLoggedIn){
    Swal.fire({title:'Error!!!', text: 'Login must required !!!', icon: 'error'});
    return;
}
setSelectedValue(rate)
props.OnChange(rate)
    }


    return(
        <>
        {maxmiumValues.map((_, index) => <FontAwesomeIcon 
        onMouseOver={() => handleMouseOver(index+1)}
        onClick={() => handleClickFunction(index+1)}
        icon={"star"} key={index}
         className={`fa-lg pointer ${selectedValue >= index+1 ? 'checked' : null}`}
        />)}
        </>
    )


}

interface ratingProps{
    maxmiunValue: number;
    selectedValue: number;
    OnChange(rate: number): void;
}