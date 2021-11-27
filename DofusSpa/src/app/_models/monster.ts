export interface Monster{
    id : number,
    ankamaID : number,
    name : string,
    url : string,
    imgUrl : string,
    level : number,
    type: string,
    description : string,
    statistics : any[],
    drops : any[],
    resistances : any[],
    areas : any[],
}