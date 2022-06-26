import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: [],
})
export class EditComponent implements OnInit {
  id = new FormControl();
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

  editBookForm = new FormGroup({
    id: this.id,
    title: this.title,
    description: this.description,
    author: this.author,
    rating: this.rating,
  });

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.bookService.getBookById(id).subscribe((data) => {
      this.id.setValue(data.id);
      this.title.setValue(data.title);
      this.author.setValue(data.author);
      this.description.setValue(data.description);
      this.rating.setValue(data.rating);
    });
  }

  updateBook() {
    const book: IBook = {
      id: this.id.value,
      title: this.title.value!,
      author: this.author.value!,
      description: this.description.value!,
      rating: this.rating.value!,
    };
    this.bookService.updateBook(book).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
