import { IsString, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { AuthorDto } from './author.dto';

export class BookDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    genre: string;

    @ValidateNested()
    @Type(() => AuthorDto)
    author: AuthorDto;

    @IsString()
    publisher: string;

    @IsNumber()
    isbn: number
}

