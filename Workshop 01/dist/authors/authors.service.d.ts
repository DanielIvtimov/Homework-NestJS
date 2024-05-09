import { AuthorORMEntity } from 'src/entity/author.entity';
import { Author } from 'src/interfaces/data.interfaces';
import { Repository } from 'typeorm';
export declare class AuthorsService {
    private readonly authorRepository;
    constructor(authorRepository: Repository<AuthorORMEntity>);
    getAllAuthors(): Promise<AuthorORMEntity[]>;
    createAuthor(authorData: Author): Promise<AuthorORMEntity>;
    getAuthorById(id: string): Promise<AuthorORMEntity>;
    deleteAuthor(id: string): Promise<void>;
}
