import { BooksService } from './books.service';
import { BookDto } from 'src/dataDto/book.dto';
import { BookORMEntity } from 'src/entity/book.entity';
export declare class BooksController {
    private readonly bookService;
    constructor(bookService: BooksService);
    createBook(dataBook: BookDto): Promise<BookORMEntity>;
}
