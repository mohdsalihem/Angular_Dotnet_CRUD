import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IBook } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  apiUrl = environment.apiUrl + '/Books';

  getAllBooks() {
    return this.http.get<IBook[]>(`${this.apiUrl}/GetAllBooks`);
  }

  getBookById(id: number) {
    return this.http.get<IBook>(`${this.apiUrl}/GetBook`, {
      params: {
        id: id,
      },
    });
  }

  updateBook(book: IBook) {
    return this.http.put<string>(`${this.apiUrl}/UpdateBook`, book);
  }

  deleteBook(id: number) {
    return this.http.delete(`${this.apiUrl}/DeleteBook`, {
      params: {
        id: id,
      },
    });
  }

  addBook(book: IBook) {
    return this.http.post<IBook>(`${this.apiUrl}/AddBook`, book);
  }
}
