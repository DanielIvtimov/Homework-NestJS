export interface Author {
    firstName: string;
    lastName: string;
    from: string;
    birthDate: Date;
    books: Book[];
}

export interface Book {
    title: string;
    description: string;
    genre: string;
    author: Author;
    publisher: string;
    isbn: number;
}