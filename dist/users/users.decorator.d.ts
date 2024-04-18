import { Role } from './role.enum';
export declare const ROLES_KEY = "roles";
export declare const userRoles: (...roles: Role[]) => import("@nestjs/common").CustomDecorator<string>;
