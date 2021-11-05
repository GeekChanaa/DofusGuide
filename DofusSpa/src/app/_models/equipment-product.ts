import { Equipment } from "./equipment";
import { Product } from "./product";

export interface EquipmentProduct{
    id : number,
    equipmentID : number,
    productID : number,
    equipment : Equipment,
    product : Product
}