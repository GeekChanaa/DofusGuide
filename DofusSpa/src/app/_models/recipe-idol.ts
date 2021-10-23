import { Idol } from "./idol";

export interface RecipeIdol{
    id : number,
    ankamaID : number,
    name : string,
    url : string,
    imgUrl : string,
    quantity : number,
    level : number,
    type: string,
    idolID : number,
    idol : Idol
}