import { Harness } from "./harness";

export interface HarnessRecipe{
    id : number,
    ankamaID : number,
    name : string,
    url : string,
    imgUrl : string,
    quantity : number,
    level : number,
    type: string,
    harnessID : number,
    harness : Harness,
}