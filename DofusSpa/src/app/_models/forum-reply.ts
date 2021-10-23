import { ForumComment } from "./forum-comment";
import { User } from "./user";

export interface ForumReply{
    id : number,
    content : string,
    forumCommentID : number,
    forumComment : ForumComment,
    createdAt : Date,
    userID : number, 
    user : User
}