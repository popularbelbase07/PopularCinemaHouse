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




const routes = [

    {path: '/genres', component: IndexGenres, exact: true},
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit', component: EditGenre},

    {path: '/actors', component: IndexActors, exact: true},
    {path: '/actors/create', component: CreateActor},
    {path: '/actors/edit', component: EditActor},

    {path: '/movietheaters', component: IndexMovieTheaters, exact: true},
    {path: '/movietheaters/create', component: CreateMovieTheater},
    {path: '/movietheaters/edit', component: EditMovieTheater},

    {path: '/movies/create', component: CreateMovie},
    {path: '/movies/edit', component: EditMovie},
    {path: '/movies/filter', component: FilterMovies},
   

    {path: '/', component: LandingMoviesPage, exact:true}
];
export default routes;