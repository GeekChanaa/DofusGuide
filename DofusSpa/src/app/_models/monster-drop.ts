import { Monster } from "./monster";

export interface MonsterDrop{
    id : number,
    ankamaID : number,
    name : string,
    url : string,
    imgUrl : string,
    dropPercent : number,
    monsterID : number,
    monster : Monster
}