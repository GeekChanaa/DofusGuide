import { Profession } from "./profession";

export interface Location{
    id : number,
    name : string,
    professionID : number,
    profession : Profession
}