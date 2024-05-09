import { AuthorsService } from './authors.service';
import { AuthorDto } from 'src/dataDto/author.dto';
export declare class AuthorsController {
    private readonly authorService;
    constructor(authorService: AuthorsService);
    getAllAuthor(): Promise<import("../entity/author.entity").AuthorORMEntity[]>;
    createAuthor(authorData: AuthorDto): Promise<import("../entity/author.entity").AuthorORMEntity>;
    getAuthorById(id: string): Promise<import("../entity/author.entity").AuthorORMEntity>;
    deleteAuthor(id: string): Promise<void>;
}
