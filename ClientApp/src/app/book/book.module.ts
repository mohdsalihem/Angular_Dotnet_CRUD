import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { BooksComponent } from './books/books.component';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [BooksComponent, EditComponent, DeleteComponent, AddComponent],
  imports: [CommonModule, BookRoutingModule, SharedModule, ReactiveFormsModule],
})
export class BookModule {}
