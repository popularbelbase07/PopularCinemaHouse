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

// Actor DTO

export interface actorDTO{
    id: number;
    name: string;
    dateOfBirth: Date; 
    biography: string;
    picture: string;
}