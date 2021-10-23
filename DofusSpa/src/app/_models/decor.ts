import { HavenBag } from "./haven-bag";

export interface Decor{
    id : number,
    imgUrl : string,
    havenBagID : number,
    havenBag : HavenBag
}