import { IsString, IsDateString, IsArray, ValidateNested, } from 'class-validator';
import { Type } from 'class-transformer';
import { BookDto } from './book.dto';

export class AuthorDto {
     @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    from: string;

    @IsDateString()
    birthDate: Date;

    @IsArray()
    @ValidateNested()
    @Type(() => BookDto)
    books: BookDto[];
}
