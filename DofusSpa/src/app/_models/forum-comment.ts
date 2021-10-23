import { ForumPost } from "./forum-post";
import { User } from "./user";

export interface ForumComment{
    id : number,
    content : string,
    forumPostID : number,
    forumPost : ForumPost,
    createdAt : Date,
    userID : number,
    user : User
}