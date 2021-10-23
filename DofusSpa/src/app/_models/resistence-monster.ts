import { Monster } from "./monster";

export interface ResistenceMonster{
    id : number,
    name : string,
    min : number,
    max : number,
    monsterID : number,
    monster : Monster
}