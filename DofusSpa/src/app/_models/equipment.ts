import { EquipmentRecipe } from "./equipment-recipe";
import { EquipmentStatistic } from "./equipment-statistic";

export interface Equipment{
    id : number,
    ankamaID : number,
    name : string,
    level : number , 
    type : string,
    imgUrl : string,
    url : string,
    description : string,
    statistics : EquipmentStatistic[],
    recipes : EquipmentRecipe[]
}