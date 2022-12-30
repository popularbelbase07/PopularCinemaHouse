import axios, { AxiosResponse } from "axios";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { urlGenres, urlMovies } from "../endpoints";
import { genreDTO } from "../genres/Genres.model";
import Button from "../Utils/Button";
import MovieList from "./MovieList";
import { movieDTO } from "./Movies.Model";

export default function FilterMovies() {
  const initialValues: filterMoviesForm = {
    title: "",
    genreId: 0,
    upcommingReleases: false,
    inTheaters: false,
    page: 1,
    recordPerPage: 10
  };

  const [genres, setGenres] = useState<genreDTO[]>([]);
  const [movies, setMovies] = useState<movieDTO[]>([]);

// Search the movie by genres
 useEffect(() => {
  axios.get(`${urlGenres}/allGenres`)
  .then((response: AxiosResponse<genreDTO[]>) => {
    setGenres(response.data)
  })
 }, []);

 //Search the movie by the name of the movie
 useEffect(() => {
  searchMovies(initialValues)
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])

 function searchMovies(values : filterMoviesForm){
axios.get(`${urlMovies}/filter`,{params: values})
.then((response: AxiosResponse<movieDTO[]>) => {
setMovies(response.data);
})
 }



  return (
    <>
      <h3>Filter Movie</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={ 
          values =>{
          values.page = 1;
          searchMovies(values)
        }}
      >
        {(formikProps) => (
          <>          
          <Form>
            <div className="row gx-3 align-items-center mb-3">
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Title of the movie"
                  {...formikProps.getFieldProps("title")}
                />
              </div>

              <div className="col-auto">
                <select
                  className="form-select"
                  {...formikProps.getFieldProps("genreId")}
                >
                  <option value="0">-----Select a genre---</option>
                  {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                      {genre.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-auto">
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    id="upcommingReleases"
                    name="upcommingReleases"
                    type="checkbox"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="upcommingReleases"
                  >
                    Upcomming Releases
                  </label>
                </div>
              </div>

              <div className="col-auto">
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    id="inTheaters"
                    name="inTheaters"
                    type="checkbox"
                  />
                  <label className="form-check-label" htmlFor="inTheaters">
                    {" "}
                    In Theaters
                  </label>
                </div>
              </div>

              <div className="col-auto">
                <Button
                  className="btn btn-primary btn-rounded btn-floating btn-sm ms-3"
                  onClick={() => formikProps.submitForm()}
                >
                  {" "}
                  Filter
                </Button>
                <Button
                  className="btn btn-danger btn-rounded btn-floating btn-sm ms-3"
                  onClick={() => {formikProps.setValues(initialValues)
                    //Clear all the movies after you search the movies
                  searchMovies(initialValues)}}
                >
                  {" "}
                  Clear
                </Button>
              </div>
            </div>
          </Form>
       <MovieList movies={movies}/>
       </>

       )}
      </Formik>
    </>
  );
}

interface filterMoviesForm {
  title: string;
  genreId: number;
  upcommingReleases: boolean;
  inTheaters: boolean;
  page: number;
  recordPerPage: number;
}


/*
 const genres: genreDTO[] = [
    { id: 1, name: "Drama" },
    { id: 2, name: "Comedy" },
  ];
*/
