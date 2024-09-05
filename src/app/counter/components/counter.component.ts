import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <div>counter: {{ counter }}</div>
<button (click)="updateCounterValue(+10)">+10</button>
<button (click)="resetCounter()">reset</button>
<button (click)="updateCounterValue(-10)">-10</button>
`
})

export class CounterComponent {
    public counter: number = 10;

    updateCounterValue(value: number):void{
      this.counter = this.counter + value;
    }

    resetCounter():void{
      this.counter = 10;
    }

}
