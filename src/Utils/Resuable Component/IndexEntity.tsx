import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";
import Button from "../Button";
import CustomConfirm from "../CustomConfirm";
import DropDownRecordsPerPage from "../DropDownRecordPerPage";
import GenericList from "../GenericList";
import Pagination from "../Pagination";

export default function IndexEntity<T>(props: indexEntityprops<T>) {
  // create a useState hook to display the list of genres
  const [entities, setEntities] = useState<T[]>();

  // implementation of pagination in Genres using usestate variables
  const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
  const [recordPerPage, setRecordPerPage] = useState(5);
  const [page, setPage] = useState(1);

  // using react hook and axios to communicate with the backend services
  //const GenreURL ="https://localhost:7246/api/Genres";
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, recordPerPage]);
  function loadData() {
    axios
      .get(props.url, {
        // Pass the param that helps to fetch the data from the web api and pass the dependencies to change the pages
        params: { page, recordPerPage },
      })
      .then((response: AxiosResponse<T[]>) => {
        // implementating Pagination inside the hook
        const totalAmountOfRecords = parseInt(
          response.headers["totalamountofrecords"],
          10
        );
        setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordPerPage));
        setEntities(response.data);
        //console.log(response.data)
      });
  }
  // Delete the Entity
  async function deleteEntity(id: number) {
    try {
      await axios.delete(`${props.url}/${id}`);
      loadData();
    } catch (error) {
      if (error) {
        console.error(error);
        // console.error(error.response.data)
      }
    }
  }
  const buttons = (editUrl: string, id: number) => (
    <>
      <Link className="btn btn-success" to={editUrl}>
        Edit
      </Link>

      <Button
        onClick={() => CustomConfirm(() => deleteEntity(id))}
        className="btn btn-danger"
      >
        Delete
      </Button>
    </>
  );

  return (
    <>
      <h3>{props.title}</h3>
      {props.createUrl ?  
      <Link className="btn btn-primary" to={props.createUrl}>
      Create {props.entityName}
    </Link> : null}
      
      <DropDownRecordsPerPage
        onChange={(amountOfRecords) => {
          setPage(1);
          setRecordPerPage(amountOfRecords);
        }}
      />

      <Pagination
        currentPage={page}
        totalAmountOfPages={totalAmountOfPages}
        onChange={(newPage) => setPage(newPage)}
      />

      <GenericList list={entities}>
        <table className="table table-dark table-striped">
          {props.children(entities!, buttons)}
        </table>
      </GenericList>
    </>
  );
}

interface indexEntityprops<T> {
  url: string;
  title: string;
  createUrl?: string;
  entityName?: string;
  children(
    entities: T[],
    buttons: (editUrl: string, id: number) => ReactElement
  ): ReactElement;
}
