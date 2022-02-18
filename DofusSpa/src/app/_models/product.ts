import { ProductStatistic } from "./product-statistic";
import { User } from "./user";

export interface Product{
    id : number,
    price : number,
    betOn : boolean,
    description : string,
    userID : number,
    status : string,
    quantity : number,
    user : User,
    statistics : ProductStatistic[]
}