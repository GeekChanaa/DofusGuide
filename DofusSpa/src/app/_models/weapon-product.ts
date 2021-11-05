import { Product } from "./product";
import { Weapon } from "./weapon";

export interface WeaponProduct{
    id :number , 
    productID : number,
    weaponID : number,
    product : Product,
    weapon : Weapon
}