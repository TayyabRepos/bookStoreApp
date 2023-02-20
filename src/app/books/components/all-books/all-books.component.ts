import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/services/counter.service';
import { BookModel } from '../../Models/books.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],
})
export class AllBooksComponent implements OnInit {
  public books: BookModel[] = [];

  private _titlePage: string = '';

  public set TitlePage(value: string) {
    this._titlePage = value;
  }

  public get TitlePage() {
    return this._titlePage;
  }

  constructor(
    public bookService: BookService,
    public _counter: CounterService
  ) {}

  ngOnInit(): void {
    this.TitlePage = 'All Books';
    const allBooks = this.bookService.getBooks();
    allBooks.forEach((b) => {
      var obj = new BookModel();
      obj.id = b.id;
      obj.author = b.author;
      obj.price = b.price;
      obj.title = b.title;
      obj.totalPages = b.totalPages;
      obj.isPublished = b.isPublished;
      obj.PublishedOn = b.PublishedOn;

      this.books.push(obj);
    });
    console.log(this.books);
  }

  public increase(): void {
    this._counter.incCounter();
  }
  public decrease(): void {
    this._counter.decCounter();
  }
}
