import { Monster } from "./monster";

export interface MonsterResistence{
    id : number,
    name : string,
    min : number,
    max : number,
    monsterID : number,
    monster : Monster
}