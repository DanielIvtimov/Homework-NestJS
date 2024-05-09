import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorORMEntity } from 'src/entity/author.entity';
import { Author } from 'src/interfaces/data.interfaces';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class AuthorsService {
    constructor(@InjectRepository(AuthorORMEntity) private readonly authorRepository: Repository<AuthorORMEntity>){}

    async getAllAuthors(): Promise<AuthorORMEntity[]>{
        return await this.authorRepository.find({
            relations: ['books']
        });
    }

    async createAuthor(authorData: Author): Promise<AuthorORMEntity>{
        const newAuthor = this.authorRepository.create(authorData);
        return await this.authorRepository.save(newAuthor);
    }

    async getAuthorById(id: string): Promise<AuthorORMEntity>{
        const author = await this.authorRepository.findOne({ where: {id}, relations: ['books'] });
        if (!author) {
            throw new NotFoundException(`Author with ID ${id} not found.`);
        }
        return author;
    }

    async deleteAuthor(id: string): Promise<void>{
        const result = await this.authorRepository.delete(id);
        if (!result.affected){
            throw new NotFoundException(`Author with ID ${id} not found.`);
        }
    }
}
