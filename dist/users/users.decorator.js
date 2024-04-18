"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoles = exports.ROLES_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.ROLES_KEY = 'roles';
const userRoles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_KEY, roles);
exports.userRoles = userRoles;
//# sourceMappingURL=users.decorator.js.map