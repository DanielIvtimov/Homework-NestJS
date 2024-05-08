import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
  ){}
  async canActivate(context: ExecutionContext):Promise<boolean>{
    const request: Request = context.switchToHttp().getRequest();
    const token = this.extractToken(request)
    if(!token){
      throw new UnauthorizedException();
    }
    try {
      const jwtPayload = await this.jwtService.verifyAsync(token, {
        secret: 'daniel'
      });
      return true;
    } catch {
      throw new UnauthorizedException(`error`);
    }
  }
  extractToken(request: Request): string | undefined {
    return request.headers['authorization'];
  }
}