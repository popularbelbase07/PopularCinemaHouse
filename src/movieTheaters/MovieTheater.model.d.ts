import { number } from "yup";

export interface MovieTheaterCreationDTO {
    name: string;
    latitude? : number;
    longitude? : number;
}