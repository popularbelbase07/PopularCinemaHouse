import { movieTheaterDTO, movieTheatersDTO } from './../movieTheaters/MovieTheater.model.d';
import { genreDTO } from './../genres/Genres.model.d';
import { actorsMovieDTO } from './../actors/Actors.model.d';
// .d is a type defination file

// DTO : Data Transfer Object => purpose is to be data container
export interface movieDTO{
    id: number;
    title: string;
    poster: string;
    inTheaters: boolean;
    trailer: string;
    releaseDate: Date;
    summary?: string;
    genres: genreDTO[];
    movieTheaters: movieTheaterDTO[];
    actors: actorsMovieDTO[];

}

export interface movieCreationDTO {
title: string;
inTheaters: boolean;
trailer: string;
releaseDate?: Date;
summary?: string;
poster?: File;
posterURL?: string;
genresIds?: number[];
movieTheatersIds?: number[];
actors?: actorsMovieDTO[];

}


export interface LandingPageDTO{
    inTheaters? : movieDTO[];
    upcommingReleases? : movieDTO[]
}

export interface moviePostGetDTO{
    genres: genreDTO[];
    movieTheaters: movieTheaterDTO[];
}

export interface moviePutGetDTO {
    movie: movieDTO;
    selectedGenres : genreDTO[];
    nonSelectedGenres : genreDTO[];
    selectedMovieTheaters : movieTheatersDTO[];
    nonSelectedMovieTheaters: movieTheatersDTO[];
    actors: actorsMovieDTO[];
}
