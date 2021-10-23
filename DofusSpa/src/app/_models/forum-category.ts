import { User } from "./user";

export interface ForumCategory{
    id : number,
    title : string,
    description : string,
    createdAt : Date,
    userID : number,
    user : User
}