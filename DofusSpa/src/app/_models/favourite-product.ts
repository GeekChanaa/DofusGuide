import { Product } from "./product";
import { User } from "./user";

export interface FavouriteProduct{
    id : number,
    productID : number,
    userID : number,
    product : Product,
    user : User
}