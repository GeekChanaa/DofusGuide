import { Resource } from "./resource";

export interface ResourceRecipe{
    id : number,
    ankamaID : number,
    name : string,
    url : string,
    imgUrl : string,
    quantity : number,
    level : number,
    type: string,
    resourceID : number,
    resource : Resource
}