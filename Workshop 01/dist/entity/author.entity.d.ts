import { BookORMEntity } from './book.entity';
export declare class AuthorORMEntity {
    id: string;
    firstName: string;
    lastName: string;
    from: string;
    birthDate: Date;
    books: BookORMEntity[];
}
