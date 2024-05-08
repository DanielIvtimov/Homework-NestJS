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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcryptjs_1 = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async registerUser(userData) {
        const foundUser = await this.usersService.findUserByEmail(userData.email);
        if (foundUser) {
            throw new common_1.BadRequestException(`User with that email ${userData.email} already exists`);
        }
        const hashedPassword = await (0, bcryptjs_1.hash)(userData.password, 8);
        const newUser = await this.usersService.createUser(userData.email, hashedPassword, userData.firstName, userData.lastName);
        return newUser;
    }
    async loginUser(userData) {
        const userFound = await this.usersService.findUserByEmail(userData.email);
        if (!userFound) {
            throw new common_1.NotFoundException(`User with email ${userData.email} does not exist`);
        }
        const validPassword = await (0, bcryptjs_1.compare)(userData.password, userFound.password);
        if (!validPassword) {
            throw new common_1.UnauthorizedException(`Invalid password`);
        }
        const jwtPayload = { sub: userFound.id, email: userFound.email };
        const token = await this.jwtService.signAsync(jwtPayload);
        return {
            token: token
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map