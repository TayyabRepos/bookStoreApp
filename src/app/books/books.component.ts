import { Component, OnInit } from '@angular/core';
import { BookModel } from './Models/books.model';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  ngOnInit(): void {}
}
