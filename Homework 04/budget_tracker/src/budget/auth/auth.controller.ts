import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from '../budgetDto/register.dto';
import { LoginDTO } from '../budgetDto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('register')
    async register(@Body()registerData: RegisterDTO){
        return this.authService.registerUser(registerData)
    }

    @Post('login')
    async login(@Body()loginData: LoginDTO){
        return this.authService.loginUser(loginData);
    }
}
