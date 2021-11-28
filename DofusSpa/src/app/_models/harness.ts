import { HarnessRecipe } from "./harness-recipe";

export interface Harness{
    id : number,
    ankamaID : number,
    name : string,
    url : string,
    imgUrl : string,
    level : number,
    type: string,
    description : string,
    recipes : HarnessRecipe[],
}