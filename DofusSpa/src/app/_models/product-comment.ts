import { Product } from "./product";
import { User } from "./user";

export interface ProductComment{
    id : number,
    productID : number,
    content : string,
    userID : number,
    product : Product,
    user : User
}