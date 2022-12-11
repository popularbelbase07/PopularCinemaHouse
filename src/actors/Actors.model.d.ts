export interface actorCreationDTO{
    name: string;
    dateOfBirth?: Date;
    picture?: File;
    pictureURL?: string;
    biography?: string;
}

// For TypeAhead 

export interface actorsMovieDTO{
    id: number;
    name:string;
    character: string;
    picture: string;

}