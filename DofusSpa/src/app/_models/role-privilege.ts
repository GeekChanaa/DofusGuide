import { Privilege } from "./privilege";
import { Role } from "./role";

export interface RolePrivilege{
    id : number,
    roleID : number,
    privilegeID : number,
    role : Role,
    privilege : Privilege
}