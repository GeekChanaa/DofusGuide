import { User } from "./user";

export interface follower{
    id : number,
    userID : number,
    followID : number,
    user : User,
    follow : User
}