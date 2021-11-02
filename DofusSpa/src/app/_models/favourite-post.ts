import { ForumPost } from "./forum-post";
import { User } from "./user";

export interface FavouritePost{
    id : number,
    forumPostID : number,
    userID : number,
    forumPost : ForumPost,
    user : User
}