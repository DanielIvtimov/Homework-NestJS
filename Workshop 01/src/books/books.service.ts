import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookDto } from 'src/dataDto/book.dto';
import { AuthorORMEntity } from 'src/entity/author.entity';
import { BookORMEntity } from 'src/entity/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(BookORMEntity) private readonly bookRepository: Repository<BookORMEntity>,
        @InjectRepository(AuthorORMEntity) private readonly authorRepository: Repository<AuthorORMEntity>
    ) {}
    
    async createBook(dataBook: BookDto){
        const title = dataBook.title;
        const description = dataBook.description;
        const genre = dataBook.genre;
        const author = dataBook.author;
        const publisher = dataBook.publisher;
        const isbn = dataBook.isbn;

        let authorEntity = await this.authorRepository.findOne({ where: { firstName: author.firstName, lastName: author.lastName } });
        if (!authorEntity) {
            throw new NotFoundException(`Author with name ${author.firstName} ${author.lastName} not found.`);
        }
        const newBook = this.bookRepository.create({
            title,
            description,
            genre,
            author: authorEntity,
            publisher,
            isbn
        });

        await this.bookRepository.save(newBook);
        const copyAuthor = {...authorEntity, books: [newBook]}
        // authorEntity.books.push(newBook)
        await this.authorRepository.update({id: authorEntity.id}, {...authorEntity, books:[newBook]});
        return newBook;
    }
}

