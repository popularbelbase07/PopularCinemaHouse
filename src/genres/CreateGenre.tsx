import { useHistory } from "react-router-dom";
import GenresForm from "./GenresForm";
import { GenreCreationDTO } from "./Genres.model";
import axios from "axios";
import { urlGenres } from "../endpoints";
import { useState } from "react";
import DisplayError from "../Utils/DisplayError";

export default function CreateGenre() {
  // Using Axios for HTTP post request
  const history = useHistory();
  // display the list of error we need the useState Hook
  const [errors, setErrors] = useState<string[]>([]);

  async function Create(genre: GenreCreationDTO) {
    try {
      axios.post(urlGenres, genre);
      history.push("/genres");
    } 
    catch(error){
      //console.error(error);

      /*      
       if(error && error.response){
          setErrors(error.response,data)
        }
      */
        if(errors){
          setErrors(errors)
        }

       
    }
  }

  return (
    <>
      <h3>Create Genre</h3>
      <DisplayError errors={errors} />
      <GenresForm
        model={{ name: "" }}
        onSubmit={async (value) => {
          /*
          await new Promise((r) => setTimeout(r, 1000));
          console.log(value);
          */
          // call the Create Method from the axios post
          await Create(value);
        }}
      />
    </>
  );
}
