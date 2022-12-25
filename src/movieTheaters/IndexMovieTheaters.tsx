import { urlMovieTheaters } from "../endpoints";
import IndexEntity from "../Utils/Resuable Component/IndexEntity";
import { movieTheatersDTO } from "./MovieTheater.model";

export default function MovieTheaters(){
    return(
        <IndexEntity<movieTheatersDTO>
        url={urlMovieTheaters}
        createUrl="/movietheaters/create"
        title="Movie Theaters"
        entityName="Movie Theater"
      >
        {(movieTheaters, buttons) =>
          <>
            <thead>
              <tr>
                <th>Actions</th>
                <th>Movie Theater's Name</th>
              </tr>
            </thead>
            <tbody>
              {movieTheaters?.map((movieTheater) =>
                <tr key={movieTheater.id}>
                  <td>{buttons(`movietheaters/edit/${movieTheater.id}`, movieTheater.id)}</td>
                  <td>{movieTheater.name}</td>
                </tr>
              )}
            </tbody>
          </>
        }
      </IndexEntity>
    )
}