import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexGenres from "./genres/IndexGenres";
import MovieList from "./movies/MovieList";
import { LandingPageDTO } from "./movies/Movies.Model";
import Menu from "./navBar/Menu";

function App() {
  const [movies, setMovies] = useState<LandingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: "Spider-Man: Far from Home",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg",
          },
          {
            id: 2,
            title: "Avatar",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
          },
        ],
        upcommingReleases: [
          {
            id: 3,
            title: "Star Wars",
            poster:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9BaTUkwzpi_3cUYj_Gaws2fZc7qMGwbuzlA&usqp=CAU",
          },
          {
            id: 4,
            title: "Dragen",
            poster:
              "https://m.media-amazon.com/images/M/MV5BNDFiYjA4N2ItMjAxYy00YWY5LTk2YTUtNjg2OGQwMzU5MDA4XkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_.jpg",
          },
        ],
      });
    }, 2000);
    return () => clearTimeout(timerId);
  });

  return (
    <BrowserRouter>
      <Menu />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <h3>In Theaters</h3>
            <MovieList movies={movies.inTheaters} />

            <h3>Upcomming Releases</h3>
            <MovieList movies={movies.upcommingReleases} />
          </Route>

          <Route path="/genres">
            <IndexGenres />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
