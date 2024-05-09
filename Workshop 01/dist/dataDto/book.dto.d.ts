import { AuthorDto } from './author.dto';
export declare class BookDto {
    title: string;
    description: string;
    genre: string;
    author: AuthorDto;
    publisher: string;
    isbn: number;
}
