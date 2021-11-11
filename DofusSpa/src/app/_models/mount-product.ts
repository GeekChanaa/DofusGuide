import { Mount } from "./mount";
import { Product } from "./product";

export interface MountProduct{
    id : number,
    mountID : number,
    productID : number,
    mount : Mount,
    product : Product
}