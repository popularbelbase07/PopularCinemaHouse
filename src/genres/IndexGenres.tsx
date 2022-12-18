import { urlGenres } from "../endpoints";
import IndexEntity from "../Utils/Resuable Component/IndexEntity";
import { genreDTO } from "./Genres.model";


export default function IndexGenres() {

return(
<>
<IndexEntity<genreDTO>
  url = {urlGenres}
  createUrl = "genres/create"
  title = "Genres"
  entityName = "Genre"

>
  {(genres, buttons) => <>
  
    <thead>
            <tr>
              <td>Actions</td>
              <td>Name</td>
            </tr>          
          </thead>

          <tbody>
            {genres?.map(genre => (
              <tr key={genre.id}>
                <td>
                 {buttons (` genres/edit/${genre.id}`, genre.id)}
                </td>
                <td>{genre.name}</td>
                
              </tr>
            ))}
          </tbody>
  
  </>
  }

</IndexEntity>

</>
)}
