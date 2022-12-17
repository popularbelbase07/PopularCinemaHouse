import axios, { AxiosResponse } from "axios";
import { PolyUtil } from "leaflet";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { urlGenres } from "../endpoints";
import DisplayError from "../Utils/DisplayError";
import Loading from "../Utils/Loading";
import { GenreCreationDTO, genreDTO } from "./Genres.model";
import GenresForm from "./GenresForm";

export default function EditGenre(){
    const {id}: any = useParams();
    const [genre, setGenre] = useState<GenreCreationDTO>();
    const [errors, setErrors] = useState<string []> ([]);
      const history = useHistory();


    //need to create a function tha immediately load the data after the component loads.
  useEffect(() => {
    axios.get(`${urlGenres}/${id}`)
        .then((response: AxiosResponse<genreDTO>) => {
          setGenre(response.data)
        })
  }, [id]);

  async function editGenres(genreToEdit: GenreCreationDTO){

    try{
      await axios.put(`${urlGenres}/${id}`, genreToEdit)
      history.push('/genres')
  
    }
    catch(error){
      if(error){
        console.log(error)
      }
    }
  }




    return (
        <>
        <h3>Edit Genre</h3> 
       <DisplayError
       errors={errors}
       />
        { genre ? 
         <GenresForm  model={genre}
          onSubmit={async (value) => {
            // await new Promise((r) => setTimeout(r, 1000));
            // console.log(id);
            // console.log(value);
            await editGenres(value);
          }
        }      
      /> : <Loading/>
      }    
        </>
    )
}