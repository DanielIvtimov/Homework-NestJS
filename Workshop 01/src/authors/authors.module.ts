import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { AuthorORMEntity } from 'src/entity/author.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookORMEntity } from 'src/entity/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorORMEntity, BookORMEntity])],
  controllers: [AuthorsController],
  providers: [AuthorsService]
})
export class AuthorsModule {}
