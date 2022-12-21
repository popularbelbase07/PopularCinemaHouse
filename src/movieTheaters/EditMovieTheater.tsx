import { urlMovieTheaters } from "../endpoints";
import EditEntity from "../Utils/Resuable Component/EditEntity";
import { MovieTheaterCreationDTO, movieTheaterDTO } from "./MovieTheater.model";
import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {
  return (
   <EditEntity<MovieTheaterCreationDTO, movieTheaterDTO>
    url = {urlMovieTheaters} indexUrl ={"/movietheaters"} entityName="Movie Theaters"   
   >
    {(entity, edit) =>
    <MovieTheaterForm
    model={entity}
    onSubmit= {async values => 
      await edit(values)}
    />    
}
   </EditEntity>
  );
}
