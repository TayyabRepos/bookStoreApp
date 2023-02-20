import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
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
  constructor(
    private _bookSerice: BookService,
    private _formBuilder: FormBuilder
  ) {}
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
    const formatTypeControl = this.addBookForm.get('formatType');
    formatTypeControl?.valueChanges.subscribe((value) => {
      this.formateTypeChanged(value);
    });
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
    this.addBookForm = this._formBuilder.group({
      title: [
        'this is default',
        [Validators.required, Validators.minLength(3)],
      ],
      author: '',
      totalPages: '',
      price: this._formBuilder.group({
        value: '',
        currency: '',
      }),
      PublishedOn: '',
      isPublished: '',
      formatType: '',
      docControl: '',
      pdfControl: '',
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

  private formateTypeChanged(value: string): void {
    // Getting refs of controls
    const pdfControl = this.addBookForm.get('pdfControl');
    const docControl = this.addBookForm.get('docControl');
    if (value === 'pdf') {
      pdfControl?.addValidators([Validators.required, Validators.minLength(3)]);
      docControl?.clearValidators();
    } else if (value === 'doc') {
      docControl?.addValidators([Validators.required, Validators.minLength(3)]);
      pdfControl?.clearValidators();
    }
    pdfControl?.updateValueAndValidity();
    docControl?.updateValueAndValidity();
  }
}
