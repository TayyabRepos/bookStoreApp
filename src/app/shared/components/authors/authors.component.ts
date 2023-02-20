import {
  EventEmitter,
  Component,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  constructor() {}

  @Input() data: number = 0;
  @Input() data2: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  // @Input()
  // set data(value: number) {
  //   this._data = ++value;
  // }
  // get data(): number {
  //   return this._data;
  // }

  // @Input() setValue(value: number) {
  //   this.data = value;
  // }
  // getValue(): number {
  //   return this.data;
  // }

  // public data: number;

  // public set(value: number) {
  //   this.data = value;
  // }

  // @Output() myData = new EventEmitter();

  // public btnClicked(): void {
  //   this.myData.emit('Data from Child component');
  // }

  ngOnInit(): void {}
}
