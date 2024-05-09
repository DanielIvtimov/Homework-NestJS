import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BookORMEntity } from './book.entity'

@Entity({name:"our_author"})
export class AuthorORMEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    from: string;

    @Column()
    birthDate: Date;

    @OneToMany(() => BookORMEntity, book => book.author)
    books: BookORMEntity[];
}

