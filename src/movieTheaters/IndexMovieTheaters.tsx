import { Link } from "react-router-dom";
import { urlMovieTheaters } from "../endpoints";
import IndexEntity from "../Utils/Resuable Component/IndexEntity";
import { movieTheaterDTO } from "./MovieTheater.model";

export default function MovieTheaters(){
    return(
        <IndexEntity<movieTheaterDTO>
        url={urlMovieTheaters}
        createUrl="movieTheater/create"
        title="Movie Theaters"
        entityName="Movie Theater"
      >
        {(movieTheaters, buttons) =>
          <>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {movieTheaters?.map((movieTheater) =>
                <tr key={movieTheater.id}>
                  <td>{buttons(`movieTheaters/edit/${movieTheater.id}`, movieTheater.id)}</td>
                  <td>{movieTheater.name}</td>
                </tr>
              )}
            </tbody>
          </>
        }
      </IndexEntity>
    )
}