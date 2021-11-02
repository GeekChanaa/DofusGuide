import { ForumReply } from "./forum-reply";
import { User } from "./user";

export interface ForumReportReply{
    id : number,
    userID : number,
    forumReplyID : number,
    user : User,
    forumReply : ForumReply
}