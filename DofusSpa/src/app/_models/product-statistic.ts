import { Product } from "./product";

export interface ProductStatistic{
    id : number,
    productID : number,
    value : number,
    name : string,
    product : Product
}