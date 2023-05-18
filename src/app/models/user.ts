import { Role } from "./role";

export interface User {
    id:any;
    igg:string;
    firstName:string;
    lastName:string;
    country:string;
    city:string;
    userRoles: Role[];
}
