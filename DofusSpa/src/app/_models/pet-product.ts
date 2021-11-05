import { Pet } from "./pet";
import { Product } from "./product";

export interface PetProduct{
    id : number,
    petID : number,
    productID : number,
    product : Product,
    pet : Pet
}