import { Harvest } from "./harvest";
import { Location } from "./location";

export interface Profession{
    id : number,
    ankamaID : number,
    name : string,
    imgUrl : string,
    url : string,
    description : string,
    locations : Location[],
    harvests : Harvest[]
}