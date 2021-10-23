import { User } from "./user";

export interface ForumReport{
    id : number,
    forumPostID : number,
    userID : number,
    createdAt : Date,
    user : User
}