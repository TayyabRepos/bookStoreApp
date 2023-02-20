import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HasElementRef } from '@angular/material/core/common-behaviors/color';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  input1: number = 0;
  input2: boolean = false;

  increase() {
    this.input1++;
    this.input2 = !this.input2;
  }

  ngOnInit(): void {}
  // public childData($event: any): void {
  //   console.log($event);
  // }
}
