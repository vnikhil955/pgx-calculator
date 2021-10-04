import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-calculator',
  template: `
    <div id="calculator">
    <div class=title>PGX-Calculator</div>
    <table>
        <tr>
            <td colspan="3"><input type="text" id="result" value="{{ result }}"/></td>
            <!-- clr() function will call clr to clear all value -->
            <td><input type="button" value="c" (click)="clr()" /> </td>
        </tr>
        <tr>
            <td><input type="button" value="1" (click)="get('1')" /> </td>
            <td><input type="button" value="2" (click)="get('2')" /> </td>
            <td><input type="button" value="3" (click)="get('3')" /> </td>
            <td><input type="button" value="/" (click)="operators('/')" /> </td>
        </tr>
        <tr>
            <td><input type="button" value="4" (click)="get('4')" /> </td>
            <td><input type="button" value="5" (click)="get('5')" /> </td>
            <td><input type="button" value="6" (click)="get('6')" /> </td>
            <td><input type="button" value="-" (click)="operators('-')" /> </td>
        </tr>
        <tr>
            <td><input type="button" value="7" (click)="get('7')" /> </td>
            <td><input type="button" value="8" (click)="get('8')" /> </td>
            <td><input type="button" value="9" (click)="get('9')" /> </td>
            <td><input type="button" value="+" (click)="operators('+')" /> </td>
        </tr>
        <tr>
            <td><input type="button" value="." (click)="get('.')" /> </td>
            <td><input type="button" value="0" (click)="get('0')" /> </td>
            <td><input type="button" value="=" (click)="solution()"/> </td>
            <td><input type="button" value="*" (click)="operators('*')" /> </td>
        </tr>
    </table>
</div>
  `,
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
  }

  clr() {
    this.result = "";
  }
}
