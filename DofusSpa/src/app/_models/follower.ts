import { User } from "./user";

export interface Follower{
    id : number,
    userID : number,
    followID : number,
    user : User,
    follow : User
}