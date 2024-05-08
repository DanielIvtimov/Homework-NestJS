import { AuthService } from './auth.service';
import { RegisterDTO } from '../budgetDto/register.dto';
import { LoginDTO } from '../budgetDto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerData: RegisterDTO): Promise<import("../entity/users.entity").UserORMEntity>;
    login(loginData: LoginDTO): Promise<{
        token: string;
    }>;
}
