import { movieDTO } from "./Movies.Model";
import css from './IndividualMovie.module.css';
import { Link } from "react-router-dom";
import Button from "../Utils/Button";
import CustomConfirm from "../Utils/CustomConfirm";
import axios from "axios";
import { urlMovies } from "../endpoints";
import AlertContext from "../Utils/AlertContext";
import {useContext} from "react";

export default function IndividualMovie(props: movieDTO){

    const runLink = () => `/movies/${props.id}`
    const CustomAlert = useContext(AlertContext);

    function deleteMovie(){
        axios.delete(`${urlMovies}/${props.id}`)
        .then(() => {
CustomAlert();
        })
    }

    return(

        <div className={css.div}>
                <Link to={runLink()}>
                    <img alt = "Poster" src= {props.poster}/>
                </Link>
                <p>
                    <Link to={runLink()}>{props.title}</Link>
                </p>
                <div>
                <Link style={{marginRight: '1rem'}} className="btn btn-info"
                    to ={`/movies/edit/${props.id}`}>
                         Edit Movie
                         </Link>
                   <Button
                    onClick={() => CustomConfirm(() => deleteMovie())}
                    className="btn btn-danger" children={"Delete"}    
                    />

                </div>
        </div>
    )
}