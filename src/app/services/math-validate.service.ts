import { Injectable } from '@angular/core';

interface IMathVal {
  expression: string;
  confirmValue: number;
}

@Injectable()
export class MathValidateService implements IMathVal {
  expression: string;
  confirmValue: number;
  constructor() {
    let num1 = Math.round(Math.random() * 100);
    let num2 = Math.round(Math.random() * 100);
    this.expression = num1 + ' + ' + num2;
    this.confirmValue = num1 + num2;
  }

  confirmValidation(answer: number) {
    return (answer == this.confirmValue);
  }


}
