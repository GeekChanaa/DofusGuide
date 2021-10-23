import { Classe } from "./classe";

export interface Role{
    id : number,
    name : string,
    classeID : number,
    classe : Classe
}