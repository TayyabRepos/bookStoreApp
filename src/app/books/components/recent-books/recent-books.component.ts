import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../Models/books.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.scss'],
})
export class RecentBooksComponent implements OnInit {
  constructor(public recentService: BookService) {}
  public recentBooks: BookModel[];
  ngOnInit(): void {
    this.getRecentBooks();
  }
  public getRecentBooks(): void {
    this.recentBooks = this.recentService.recentBooks();
  }
}
