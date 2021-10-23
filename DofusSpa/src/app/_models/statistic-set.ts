import { Set } from "./set";

export interface StatisticSet{
    id : number,
    name : string,
    min : number,
    max : number,
    setID : number,
    set : Set,
}