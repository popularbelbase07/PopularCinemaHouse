// .d is a type defination file

// DTO : Data Transfer Object => purpose is to be data container
export interface movieDTO{
    id: number;
    title: string;
    poster: string;

}
export interface LandingPageDTO{
    inTheaters? : movieDTO[];
    upcommingReleases? : movieDTO[]
}