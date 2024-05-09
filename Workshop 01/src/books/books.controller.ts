import { Body, Controller, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDto } from 'src/dataDto/book.dto';
import { BookORMEntity } from 'src/entity/book.entity';
@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BooksService){}

    @Post()
    async createBook(@Body()dataBook: BookDto): Promise<BookORMEntity>{
        return this.bookService.createBook(dataBook);
    }
}
