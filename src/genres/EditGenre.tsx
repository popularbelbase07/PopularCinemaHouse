import { useParams } from "react-router-dom"
import GenresForm from "./GenresForm";

export default function EditGenre(){

    const {id}: any = useParams();
    return (
        <>
        <h3>Edit Genre</h3> 
        <GenresForm
        model={{ name: "Action" }}
        onSubmit={async (value) => {
          await new Promise((r) => setTimeout(r, 1000));
          console.log(id);
          console.log(value);
        }}
      />
        
        </>
    )
}