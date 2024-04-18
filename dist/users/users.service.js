"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    constructor(user, jwt) {
        this.user = user;
        this.jwt = jwt;
    }
    create(createUserDto) {
        return 'This action adds a new user';
    }
    async Log(user, res) {
        let foundedUser = await this.user.findOne({ email: user.email });
        if (!foundedUser) {
            return { message: "Email Not Found ..." };
        }
        let checkPass = await bcrypt.compare(user.password, foundedUser.password);
        if (!checkPass) {
            return { message: "Wrong ..." };
        }
        let token = await this.jwt.sign({ isAdmin: foundedUser.isAdmin });
        res.header({ jwt: token }).send({ token, foundedUser });
    }
    async Reg(user) {
        let foundedUser = await this.user.findOne({ email: user.email });
        if (foundedUser) {
            return { message: "Email already exists ..." };
        }
        let Salt = await bcrypt.genSalt(10);
        let passwordHash = await bcrypt.hash(user.password, Salt);
        user.password = passwordHash;
        let newUser = new this.user(user);
        await newUser.save();
        return { message: "Register success" };
    }
    findAll() {
        return `This action returns all users`;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('users')),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map