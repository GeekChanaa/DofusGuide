import { User } from "./user";

export interface FriendRequest{
    id : number,
    senderID : number,
    receiverID : number,
    sender : User,
    receiver : User
}