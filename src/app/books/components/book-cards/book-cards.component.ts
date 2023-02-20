import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../../Models/books.model';

@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.scss'],
})
export class BookCardsComponent implements OnInit {
  constructor() {}
  private _book: BookModel[];

  @Input('all-books')
  set books(book: BookModel[]) {
    book.map((x) => (x.title = 'Title: ' + x.title));

    this._book = book;
  }
  get books(): BookModel[] {
    return this._book;
  }

  ngOnInit(): void {}
}
