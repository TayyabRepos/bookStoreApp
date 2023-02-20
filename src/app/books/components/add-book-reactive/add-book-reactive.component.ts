import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.scss'],
})
export class AddBookReactiveComponent implements OnInit {
  constructor(private _bookSerice: BookService) {}
  public addBookForm: FormGroup;

  public prices: any[] = [
    { value: 100, viewValue: '100' },
    { value: 200, viewValue: '200' },
    { value: 300, viewValue: '300' },
  ];
  public currencies: any[] = [
    { value: 'USD', viewValue: 'American Dollar' },
    { value: 'PKR', viewValue: 'Pakistani Rupee' },
    { value: 'AUD', viewValue: 'Australian Dollar' },
  ];

  public titleErrorMessage: string;
  public titleAuthorMessage: string;

  ngOnInit(): void {
    this.formInit();
    // console.log(this.addBookForm.get('title'));
    const titleControl = this.addBookForm.get('title');
    titleControl?.valueChanges.subscribe((x) => {
      this.validateTitleControl(titleControl as FormControl);
    });

    const authorControl = this.addBookForm.get('author');
    authorControl?.valueChanges.subscribe((x) => {
      this.validateAuthorControl(authorControl as FormControl);
    });

    const datechanges = this.addBookForm.get('PublishedOn');
    datechanges?.valueChanges.subscribe((x) => {
      console.log(x);
    });
  }

  public updateValue(): void {
    this.addBookForm.patchValue({
      title: 'Tayyab',
    });
  }

  public formInit(): void {
    this.addBookForm = new FormGroup({
      title: new FormControl('Book', [
        Validators.required,
        Validators.minLength(3),
      ]),
      author: new FormControl('Sample Author', Validators.required),
      totalPages: new FormControl(null, Validators.required),
      price: new FormGroup({
        value: new FormControl(100, Validators.required),
        currency: new FormControl('PKR'),
      }),
      PublishedOn: new FormControl(null, Validators.required),
      isPublished: new FormControl(true),
    });
  }
  public saveBook(): void {
    console.log(this.addBookForm.value);
    if (this.addBookForm.valid) {
      this._bookSerice.addBooks(this.addBookForm.value);
    } else {
      alert('Not Submitted');
    }
  }

  private validateTitleControl(titleControl: FormControl): void {
    this.titleErrorMessage = '';
    if (titleControl.errors && (titleControl.touched || titleControl.dirty)) {
      if (titleControl.errors?.required) {
        this.titleErrorMessage = 'This is a required field';
      } else if (titleControl.errors?.minlength) {
        this.titleErrorMessage =
          'Minimum length is ' + titleControl.errors?.minlength?.requiredLength;
      }
    }
  }

  private validateAuthorControl(authorControl: FormControl): void {
    this.titleAuthorMessage = '';
    if (
      authorControl.errors &&
      (authorControl.errors.required || authorControl.errors.dirty)
    ) {
      this.titleAuthorMessage = 'Author Field is required!';
    }
  }
}