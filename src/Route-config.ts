import IndexGenres from "./genres/IndexGenres";
import LandingMoviesPage from "./movies/LandingMoviesPage";

const routes = [

    {path: '/genres', component: IndexGenres},
    {path: '/', component: LandingMoviesPage}
];
export default routes;