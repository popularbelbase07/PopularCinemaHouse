import CreateActor from "../actors/CreateActor";
import EditActor from "../actors/editActor";
import IndexActors from "../actors/IndexActors";

import CreateGenre from "../genres/CreateGenre";
import EditGenre from "../genres/EditGenre";
import IndexGenres from "../genres/IndexGenres";

import CreateMovieTheater from "../movieTheaters/CreateMovieTheater";
import EditMovieTheater from "../movieTheaters/EditMovieTheater";
import IndexMovieTheaters from "../movieTheaters/IndexMovieTheaters";

import CreateMovie from "../movies/CreateMovie";
import EditMovie from "../movies/EditMovie";
import FilterMovies from "../movies/FilterMovies";

import LandingMoviesPage from "../movies/LandingMoviesPage";

import RedirectToLandingPage from "../Utils/RedirectToLandingPage";
import MovieDetails from "../movies/MovieDetails";




const routes = [

    {path: '/genres', component: IndexGenres, exact: true},
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit/:id(\\d+)', component: EditGenre},

    {path: '/actors', component: IndexActors, exact: true},
    {path: '/actors/create', component: CreateActor},
    {path: '/actors/edit/:id(\\d+)', component: EditActor},

    {path: '/movietheaters', component: IndexMovieTheaters, exact: true},
    {path: '/movietheaters/create', component: CreateMovieTheater},
    {path: '/movietheaters/edit/:id(\\d+)', component: EditMovieTheater},

    {path: '/movies/create', component: CreateMovie},
    {path: '/movies/edit/:id(\\d+)', component: EditMovie},
    {path: '/movies/filter', component: FilterMovies},
    {path: '/movies/:id(\\d+)', component: MovieDetails},
   
    

    {path: '/', component: LandingMoviesPage, exact:true},
    // create page not found
    {path: '*', component: RedirectToLandingPage}
];
export default routes;