import { Set } from "./set";

export interface SetStatistic{
    id : number,
    name : string,
    min : number,
    max : number,
    setID : number,
    set : Set,
}