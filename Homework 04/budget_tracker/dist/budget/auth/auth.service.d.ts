import { UsersService } from '../users/users.service';
import { RegisterDTO } from '../budgetDto/register.dto';
import { UserORMEntity } from '../entity/users.entity';
import { LoginDTO } from '../budgetDto/login.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    registerUser(userData: RegisterDTO): Promise<UserORMEntity>;
    loginUser(userData: LoginDTO): Promise<{
        token: string;
    }>;
}
