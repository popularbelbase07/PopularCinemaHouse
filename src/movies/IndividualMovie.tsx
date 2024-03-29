import { movieDTO } from "./Movies.Model";
import css from "./IndividualMovie.module.css";
import { Link } from "react-router-dom";
import Button from "../Utils/Button";
import CustomConfirm from "../Utils/CustomConfirm";
import axios from "axios";
import { urlMovies } from "../endpoints";
import AlertContext from "../Utils/AlertContext";
import { useContext } from "react";
import Authorization from "../auth/Authorization";

export default function IndividualMovie(props: movieDTO) {
  const runLink = () => `/movies/${props.id}`;
  const CustomAlert = useContext(AlertContext);

  function deleteMovie() {
    axios.delete(`${urlMovies}/${props.id}`).then(() => {
      CustomAlert();
    });
  }

  return (
    <div className={css.div}>
      <Link to={runLink()}>
        <img alt="Poster" src={props.poster} />
      </Link>
      <p>
        <Authorization
          role="admin"
          authorized={
            <>
              <div>
                <Link
                  style={{ marginRight: "1rem" }}
                  className="btn btn-info btn-rounded btn-floating btn-sm"
                  to={`/movies/edit/${props.id}`}
                >
                  Edit
                </Link>
                <Button
                  onClick={() => CustomConfirm(() => deleteMovie())}
                  className="btn btn-danger btn-rounded btn-floating btn-sm"
                  children={"Delete"}
                />
              </div>
            </>
          }
        />
        <Link to={runLink()}>{props.title}</Link>
      </p>
    </div>
  );
}
