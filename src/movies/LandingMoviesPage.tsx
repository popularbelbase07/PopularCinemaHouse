import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Authorization from "../auth/Authorization";
import { urlMovies } from "../endpoints";
import AlertContext from "../Utils/AlertContext";
import MovieList from "./MovieList";
import { LandingPageDTO } from "./Movies.Model";

export default function LandingMoviesPage() {
  const [movies, setMovies] = useState<LandingPageDTO>({});

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    axios.get(urlMovies).then((response: AxiosResponse<LandingPageDTO>) => {
      setMovies(response.data);
    } ,);
  }

  return (
    <AlertContext.Provider
      value={() => {
        loadData();
      }}
    >
       {/* Authorization purpose */}
       <Authorization 
      authorized={<>You are authorized !!</>}    
      notAuthorized= {<>You are not Authorized ??</>}
      role= 'admin' 
        
     
      />
      <h3>In Theaters</h3>
      <MovieList movies={movies.inTheaters} />

      <h3>Upcomming Releases</h3>
      <MovieList movies={movies.upcommingReleases} />
    </AlertContext.Provider>
  );
}

/*

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
            {
              id: 3,
              title: "Titanic",
              poster:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpHCypz73IgkoYYqKzBIMuJ5cjDoZif3efw&usqp=CAU",
            },
            {
              id: 4,
              title: "Dirty Game",
              poster:
                "https://i1.sndcdn.com/artworks-000283552511-tjcmps-t500x500.jpg",
            },
          ],
          upcommingReleases: [
            {
              id: 5,
              title: "Star Wars",
              poster:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9BaTUkwzpi_3cUYj_Gaws2fZc7qMGwbuzlA&usqp=CAU",
            },
            {
              id: 6,
              title: "Dragen",
              poster:
                "https://m.media-amazon.com/images/M/MV5BNDFiYjA4N2ItMjAxYy00YWY5LTk2YTUtNjg2OGQwMzU5MDA4XkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_.jpg",
            },
          ],
        });
      }, 2000);
      return () => clearTimeout(timerId);
    
*/
