import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [],
})
export class AddComponent implements OnInit {
  title = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100),
  ]);
  author = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100),
  ]);
  description = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(250),
  ]);
  rating = new FormControl(1, [
    Validators.required,
    Validators.min(1),
    Validators.max(10),
  ]);

  addBookForm = new FormGroup({
    title: this.title,
    description: this.description,
    author: this.author,
    rating: this.rating,
  });

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {}

  addBook() {
    const book: IBook = {
      title: this.title.value!,
      author: this.author.value!,
      description: this.description.value!,
      rating: this.rating.value!,
    };
    this.bookService.addBook(book).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
