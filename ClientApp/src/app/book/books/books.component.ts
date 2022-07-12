import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styles: [],
})
export class BooksComponent implements OnInit {
  constructor(private bookService: BookService, private router: Router) {}
  books: IBook[] = [];
  allBooks: IBook[] = [];

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((data) => {
      this.allBooks = data;
      this.books = data;
    });
  }

  editBook(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deleteBook(id: number) {
    this.router.navigate(['/delete', id]);
  }

  searchTerm(term: string) {
    if (!term) {
      this.books = this.allBooks;
      return;
    }

    this.books = this.allBooks.filter((book) =>
      book.title.toLowerCase().includes(term.toLowerCase())
    );
  }
}
