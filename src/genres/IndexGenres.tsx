import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlGenres } from "../endpoints";
import Button from "../Utils/Button";
import GenericList from "../Utils/GenericList";
import { genreDTO } from "./Genres.model";

export default function IndexGenres() {
  // create a useState hook to display the list of genres

  const [genres, setGenres] = useState<genreDTO[]>();

  // using react hook and axios to communicate with the backend services
  //const GenreURL ="https://localhost:7246/api/Genres";
  useEffect(() => {
    axios.get(urlGenres).then((response: AxiosResponse<genreDTO[]>) => {
      setGenres(response.data);
      //console.log(response.data)
    });
  }, []);

  return (
    <>
      <h3>Genres</h3>
      <Link className="btn btn-primary" to="/genres/create">
        Create Genre
      </Link>

      <GenericList list={genres}>
        <table className="table table-striped">
          <thead>
            <th></th>
            <th>Name</th>
           
          </thead>
          <tbody>
            {genres?.map((genre) => (
              <tr key={genre.id}>
                <td>
                  <Link className="btn btn-success" to={`/genres/${genre.id}`}>
                    Edit
                  </Link>

                  <Button className="btn btn-danger">Delete</Button>
                </td>
                <td>{genre.name}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </GenericList>
    </>
  );
}
