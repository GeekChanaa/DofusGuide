import { Profession } from "./profession";

export interface Harvest{
    id : number,
    ankamaID : number,
    name : string,
    url : string,
    imgUrl : string,
    level : number,
    professionID : number,
    profession : Profession
}