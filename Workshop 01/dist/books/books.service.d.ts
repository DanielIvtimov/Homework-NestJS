import { BookDto } from 'src/dataDto/book.dto';
import { AuthorORMEntity } from 'src/entity/author.entity';
import { BookORMEntity } from 'src/entity/book.entity';
import { Repository } from 'typeorm';
export declare class BooksService {
    private readonly bookRepository;
    private readonly authorRepository;
    constructor(bookRepository: Repository<BookORMEntity>, authorRepository: Repository<AuthorORMEntity>);
    createBook(dataBook: BookDto): Promise<BookORMEntity>;
}
