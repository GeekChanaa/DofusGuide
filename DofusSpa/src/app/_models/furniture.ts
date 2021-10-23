import { HavenBag } from "./haven-bag";

export interface Furniture{
    id : number,
    imgUrl : string,
    havenBagID : number,
    havenBag : HavenBag
}