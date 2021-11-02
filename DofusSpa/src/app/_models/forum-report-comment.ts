import { ForumComment } from "./forum-comment";
import { User } from "./user";

export interface ForumReportComment{
    id : number,
    forumCommentID : number,
    userID : number,
    forumComment : ForumComment,
    user : User,
}