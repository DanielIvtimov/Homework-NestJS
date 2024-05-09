import { BookDto } from './book.dto';
export declare class AuthorDto {
    firstName: string;
    lastName: string;
    from: string;
    birthDate: Date;
    books: BookDto[];
}
