import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pgx-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  result: any = "";

  constructor() { }

  ngOnInit(): void {
  }

  dis(val: any) {
    this.result += val;
  }

  solve() {
    this.result = eval(this.result);
  }

  clr() {
    this.result = "";
  }

}
