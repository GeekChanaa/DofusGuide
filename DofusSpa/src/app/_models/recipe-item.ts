import { Equipment } from "./equipment";

export interface RecipeItem{
    id : number,
    ankamaID : number,
    name : string,
    url : string,
    imgUrl : string,
    quantity : number,
    level : number,
    type: string,
    equipmentID : number,
    equipment : Equipment
}