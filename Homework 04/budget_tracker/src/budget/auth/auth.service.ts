import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDTO } from '../budgetDto/register.dto';
import { hash, compare } from 'bcryptjs' 
import { UserORMEntity } from '../entity/users.entity';
import { LoginDTO } from '../budgetDto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ){}

    async registerUser(userData: RegisterDTO): Promise<UserORMEntity>{
        const foundUser = await this.usersService.findUserByEmail(userData.email)
        if(foundUser){
            throw new BadRequestException(`User with that email ${userData.email} already exists`);
        }
        const hashedPassword = await hash(userData.password, 8);
        const newUser = await this.usersService.createUser(userData.email, hashedPassword, userData.firstName, userData.lastName)
        return newUser;
    }

    async loginUser(userData: LoginDTO){
        const userFound = await this.usersService.findUserByEmail(userData.email);
        if(!userFound){
            throw new NotFoundException(`User with email ${userData.email} does not exist`);
        }
        const validPassword = await compare(userData.password, userFound.password)
        if(!validPassword){
            throw new UnauthorizedException(`Invalid password`);
        }
        const jwtPayload = {sub: userFound.id, email: userFound.email };
        const token = await this.jwtService.signAsync(jwtPayload);
        return {
            token: token
        }
    }
}