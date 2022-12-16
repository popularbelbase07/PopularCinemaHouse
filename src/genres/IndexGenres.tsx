import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlGenres } from "../endpoints";
import Button from "../Utils/Button";
import DropDownRecordsPerPage from "../Utils/DropDownRecordPerPage";
import GenericList from "../Utils/GenericList";
import Pagination from "../Utils/Pagination";
import { genreDTO } from "./Genres.model";

export default function IndexGenres() {
  // create a useState hook to display the list of genres
  const [genres, setGenres] = useState<genreDTO[]>();

  // implementation of pagination in Genres using usestate variables
  const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
  const [recordPerPage, setRecordPerPage] = useState(5);
  const [page, setPage] = useState(1);


  // using react hook and axios to communicate with the backend services
  //const GenreURL ="https://localhost:7246/api/Genres";
  useEffect(
      () => {
          axios.get(urlGenres, {
          // Pass the param that helps to fetch the data from the web api and pass the dependencies to change the pages
            params: {page, recordPerPage}
          })
          
            .then((response: AxiosResponse<genreDTO[]>) => {
            // implementating Pagination inside the hook
            const totalAmountOfRecords =

            parseInt(response.headers["totalamountofrecords"], 10)
            setTotalAmountOfPages(Math.ceil(totalAmountOfRecords/recordPerPage)); 
            setGenres(response.data);
            //console.log(response.data)            
          });
          
      }, [page, recordPerPage]  
  )

  return (
    <>
      <h3>Genres</h3>
      <Link className="btn btn-primary" to="/genres/create">
        Create Genre
      </Link>
    <DropDownRecordsPerPage
    onChange={amountOfRecords => {
      setPage(1);
      setRecordPerPage(amountOfRecords);
    }}
    />

      <Pagination
      currentPage={page}
      totalAmountOfPages={totalAmountOfPages}
      onChange={newPage =>(setPage(newPage))}

      />

      <GenericList list={genres}>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <td>Actions</td>
              <td>Name</td>
            </tr>          
          </thead>

          <tbody>
            {genres?.map((genre) => (
              <tr key={genre.id}>
                <th>
                  <Link className="btn btn-success" to={`/genres/${genre.id}`}>
                    Edit
                  </Link>

                  <Button className="btn btn-danger">Delete</Button>
                </th>
                <th>{genre.name}</th>
                
              </tr>
            ))}
          </tbody>
        </table>
      </GenericList>
    </>
  );
}
