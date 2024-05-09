import { AuthorORMEntity } from './author.entity';
export declare class BookORMEntity {
    id: number;
    title: string;
    description: string;
    genre: string;
    author: AuthorORMEntity;
    publisher: string;
    isbn: number;
}
