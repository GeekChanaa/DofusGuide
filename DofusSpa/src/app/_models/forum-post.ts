import { ForumCategory } from "./forum-category";
import { User } from "./user";

export interface ForumPost{
    id : number,
    title : string,
    content : string,
    createdAt : Date,
    forumCategoryID : number,
    forumCategory : ForumCategory,
    userID : number,
    user : User
}