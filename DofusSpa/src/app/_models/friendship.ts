import { User } from "./user";

export interface Friendship{
    id : number , 
    userID : number , 
    friendID : number,
    user : User,
    friend : User
}