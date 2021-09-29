import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pgx-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  result: any = "";
  operator: any = "";
  value1: any = "";
  value2: any = "";
  status: boolean = false;
  solve_status: boolean = false;
  counter: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  get(val: any) {
    if (this.solve_status == true) {
      this.result = "";
      this.solve_status = false;
    }
    if (this.status == false) {
      this.result += val;
      this.value1 = this.result;
    }
    else {
      this.result += val;
      this.value2 = this.result;
      this.counter = true;
    }
  }

  operators(val: any) {
    this.operator = val;
    this.status = true;
    this.result = "";
  }

  solution() {
    if (this.counter == true) {
      this.solve();
      this.counter = false;
      this.value1 = this.result;
    }
  }

  solve() {
    this.status = false;
    this.solve_status = true;
    if (this.operator == '-') {
      this.result = this.value1 - this.value2;
    }
    else if (this.operator == '*') {
      this.result = this.value1 * this.value2;
    }
    else if (this.operator == '/') {
      this.result = this.value1 / this.value2;
    }
    else {
      this.result = +this.value1 + +this.value2;
    }

    console.log('result=' + this.result);
    console.log('value1=' + this.value1);
    console.log('value2=' + this.value2);
  }

  clr() {
    this.result = "";
  }

}
