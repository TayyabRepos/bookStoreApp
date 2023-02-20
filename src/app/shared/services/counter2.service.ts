import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class Counter2Service {
  public counter = 0;
  constructor() {}

  public incCounter(): void {
    this.counter += 4;
  }
  public decCounter(): void {
    this.counter -= 4;
  }
}
