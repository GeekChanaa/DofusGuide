import { ForumPost } from "./forum-post";
import { User } from "./user";

export interface ForumReportPost{
    id : number,
    forumPostID : number,
    userID : number,
    user : User,
    forumPost : ForumPost
}