import { number } from "yup";

export interface MovieTheaterCreationDTO {
    name: string;
    latitude? : number;
    longitude? : number;
}

export interface movieTheaterDTO {
    id: number;
    name: string;
    latitude? : number;
    longitude? : number;
}