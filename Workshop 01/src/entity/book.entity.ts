import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { AuthorORMEntity } from './author.entity';

@Entity({name:"our_book"})
export class BookORMEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    genre: string;

    @ManyToOne(() => AuthorORMEntity, author => author.books)
    author: AuthorORMEntity;

    @Column()
    publisher: string;

    @Column({type:'bigint'})
    isbn: number;
}


