import { urlGenres } from "../endpoints";
import EditEntity from "../Utils/Resuable Component/EditEntity";
import { GenreCreationDTO, genreDTO } from "./Genres.model";
import GenresForm from "./GenresForm";
/*
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
*/

export default function EditGenre(){

  return(

    <>
    <EditEntity<GenreCreationDTO, genreDTO>
      url= {urlGenres} entityName="Genres"
      indexUrl="/genres"
      >

      {(entity, editEntity) =>
       <GenresForm  model={entity}
       onSubmit={async (value) => {
        await editEntity(value);
       }}
       />
      }
    </EditEntity>
    
    </>
  )
}


