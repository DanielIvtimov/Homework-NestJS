import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserORMEntity } from '../entity/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserORMEntity) private readonly userRepository: Repository<UserORMEntity>){}

    async createUser(email: string, password: string, firstName: string, lastName: string): Promise<UserORMEntity>{
        const user = this.userRepository.create({email, password, firstName, lastName})
        return this.userRepository.save(user);
    }

    async findUserByEmail(email: string): Promise<UserORMEntity>{
        return this.userRepository.findOne({
            where: {email: email}
        });
    }

    async findUserById(id: string): Promise<UserORMEntity>{
        return this.userRepository.findOne({
            where: {id: id}
        })
    }
}


