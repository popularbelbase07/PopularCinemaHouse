import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { urlGenres } from "../endpoints";
import { genreDTO } from "./Genres.model";

export default function IndexGenres(){
     
// using react hook and axios to communicate with the backend services
//const GenreURL ="https://localhost:7246/api/Genres";
useEffect(() => {
    axios.get(urlGenres)
    .then((response: AxiosResponse<genreDTO[]>) => {
        console.log(response.data)
    })
}, [])

    return(
        <>
        <h3>Genres</h3>
        <Link className="btn btn-primary"  to= "/genres/create">Create Genre</Link>
        </>
    )
}