import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styles: [],
})
export class DeleteComponent implements OnInit {
  book!: IBook;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.bookService.getBookById(id).subscribe((data) => {
      this.book = data;
    });
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
