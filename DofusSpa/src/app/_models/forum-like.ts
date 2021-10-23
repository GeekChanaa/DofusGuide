import { ForumPost } from "./forum-post";
import { User } from "./user";

export interface ForumLike{
    id : number,
    forumPostID : number,
    forumPost : ForumPost,
    createdAt : Date,
    userID : number,
    user : User,
}