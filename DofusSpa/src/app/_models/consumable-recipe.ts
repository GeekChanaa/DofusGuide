import { Consumable } from "./consumable";

export interface ConsumableRecipe{
    id : number,
    ankamaID : number,
    name : string,
    url : string,
    imgUrl : string,
    quantity : number,
    level : number,
    type: string,
    consumableID : number,
    consumable : Consumable
}