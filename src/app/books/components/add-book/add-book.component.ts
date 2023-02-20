import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookModel } from '../../Models/books.model';
import { PriceModel } from '../../Models/price.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  constructor(private _bookService: BookService) {}
  @ViewChild('myForm') myForm: NgForm;
  public model: BookModel;
  public prices: any[] = [
    { value: 100, viewValue: '$ 100' },
    { value: 200, viewValue: '$ 200' },
    { value: 300, viewValue: '$ 300' },
  ];

  ngOnInit(): void {
    this.model = new BookModel();
    //this.model.title = 'Book';
    this.model.totalPages = 100;
    this.model.isPublished = true;
    this.model.price = {
      value: 100,
      currency: 'USD',
    };
  }

  saveBook(): void {
    console.log(this.model);
    // const book = new BookModel();
    // book.author = value.author;
    // book.title = value.title;
    // book.totalPages = value.TotalPages;
    // book.isPublished = value.toggle;
    // book.PublishedOn = value.PublishedOn;
    // book.price = {
    //   currency: '$',
    //   value: value.price,
    // };

    if (this.myForm.valid) {
      this._bookService.addBooks(this.model);
    } else {
      alert('Invalid Form');
    }
  }
}
