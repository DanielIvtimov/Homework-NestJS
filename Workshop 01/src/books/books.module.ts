import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookORMEntity } from 'src/entity/book.entity';
import { AuthorORMEntity } from 'src/entity/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookORMEntity, AuthorORMEntity])],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
