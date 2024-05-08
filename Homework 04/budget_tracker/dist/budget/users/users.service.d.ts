import { UserORMEntity } from '../entity/users.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserORMEntity>);
    createUser(email: string, password: string, firstName: string, lastName: string): Promise<UserORMEntity>;
    findUserByEmail(email: string): Promise<UserORMEntity>;
    findUserById(id: string): Promise<UserORMEntity>;
}
