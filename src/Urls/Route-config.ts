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

    {path: '/genres', component: IndexGenres, exact: true , isAdmin: true},
    {path: '/genres/create', component: CreateGenre , isAdmin: true},
    {path: '/genres/edit/:id(\\d+)', component: EditGenre , isAdmin: true},

    {path: '/actors', component: IndexActors, exact: true , isAdmin: true},
    {path: '/actors/create', component: CreateActor, isAdmin: true},
    {path: '/actors/edit/:id(\\d+)', component: EditActor, isAdmin: true},

    {path: '/movietheaters', component: IndexMovieTheaters, exact: true, isAdmin: true},
    {path: '/movietheaters/create', component: CreateMovieTheater, isAdmin: true},
    {path: '/movietheaters/edit/:id(\\d+)', component: EditMovieTheater, isAdmin: true},

    {path: '/movies/create', component: CreateMovie, isAdmin: true},
    {path: '/movies/edit/:id(\\d+)', component: EditMovie, isAdmin: true},
    {path: '/movies/filter', component: FilterMovies},
    {path: '/movies/:id(\\d+)', component: MovieDetails},
   
    

    {path: '/', component: LandingMoviesPage, exact:true},
    // create page not found
    {path: '*', component: RedirectToLandingPage}
];
export default routes;