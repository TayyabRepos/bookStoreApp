import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  public counter = 0;
  constructor() {}
  public incCounter(): void {
    this.counter++;
  }
  public decCounter(): void {
    this.counter--;
  }
}
