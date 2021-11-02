import { User } from "./user";

export interface BlockedContact{
    id : number,
    userID : number,
    blockedID : number,
    user : User,
    blocked : User
}