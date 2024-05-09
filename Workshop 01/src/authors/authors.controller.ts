import { Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorDto } from 'src/dataDto/author.dto';

@Controller('authors')
export class AuthorsController {
    constructor(private readonly authorService: AuthorsService){}

    @Get()
    async getAllAuthor(){
        return this.authorService.getAllAuthors();
    }

    @Post()
    async createAuthor(@Body() authorData: AuthorDto) {
        return this.authorService.createAuthor(authorData);
    }

    @Get(':id')
    async getAuthorById(@Param('id') id: string) {
        return await this.authorService.getAuthorById(id);
    }

    @Delete(':id')
    async deleteAuthor(@Param('id')id: string){
        return this.authorService.deleteAuthor(id);
    }
}
