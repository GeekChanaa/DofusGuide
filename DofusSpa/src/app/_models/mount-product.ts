import { Mount } from "./mount";
import { Product } from "./product";

exportt interface MountProduct{
    id : number,
    mountID : number,
    productID : number,
    mount : Mount,
    product : Product
}