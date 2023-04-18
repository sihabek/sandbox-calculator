import {
  KEY_0,
  KEY_1,
  KEY_2,
  KEY_3,
  KEY_4,
  KEY_5,
  KEY_6,
  KEY_7,
  KEY_8,
  KEY_9,
  KEY_SEPARATOR,
  KEY_OP_ADD,
  KEY_OP_SUBTRACT,
  KEY_OP_MULTIPLY,
  KEY_OP_DIVIDE,
  KEY_OP_PERCENT,
  KEY_OP_EQUALS,
  KEY_CTRL_AC,
  KEY_CTRL_C,
} from "../constants";

import Input from "./input/Input";
import Compute from "./compute/Compute";

/**
 * Implement calculator by displaying entered or computed value as result of
 * series of punched keys.
 *
 * Example:
 *
 * const calc = new Calculator();
 *
 * calc.punchKey(KEY_1);
 * console.log(calc.getDisplayd()); --> "1"
 *
 * calc.punchKey(KEY_2);
 * console.log(calc.getDisplayed()); --> "12"
 *
 * calc.punchKey(KEY_OP_DIVIDE);
 * console.log(calc.getDisplayed()); --> "12"
 *
 * calc.punchKey(KEY_3);
 * console.log(calc.getDisplayed()); --> "3"
 *
 * calc.punchKey(KEY_OP_EQUALS);
 * console.log(calc.getDisplayed()); --> "4"
 */

class Calculator {
  private input: Input;
  private compute: Compute;
  private displayed: string;

  constructor() {
    this.input = new Input();
    this.compute = new Compute();
    this.displayed = this.compute.result();
  }

  public getDisplayed(): string {
    return this.displayed;
  }

  public punchKey(key: string): void {
    switch (key) {
      // value input (display aggregated input)

      case KEY_0:
        this.displayed = this.input.push("0");
        break;

      case KEY_1:
        this.displayed = this.input.push("1");
        break;

      case KEY_2:
        this.displayed = this.input.push("2");
        break;

      case KEY_3:
        this.displayed = this.input.push("3");
        break;

      case KEY_4:
        this.displayed = this.input.push("4");
        break;

      case KEY_5:
        this.displayed = this.input.push("5");
        break;

      case KEY_6:
        this.displayed = this.input.push("6");
        break;

      case KEY_7:
        this.displayed = this.input.push("7");
        break;

      case KEY_8:
        this.displayed = this.input.push("8");
        break;

      case KEY_9:
        this.displayed = this.input.push("9");
        break;

      case KEY_SEPARATOR:
        this.displayed = this.input.push(".");
        break;

      // binary operations (compute and display previous operation, start new)

      case KEY_OP_ADD:
        this.displayed = this.compute
          .push(this.input.flush())
          .pushAdd()
          .result();
        break;

      case KEY_OP_SUBTRACT:
        this.displayed = this.compute
          .push(this.input.flush())
          .pushSubtract()
          .result();
        break;

      case KEY_OP_MULTIPLY:
        this.displayed = this.compute
          .push(this.input.flush())
          .pushMultipy()
          .result();
        break;

      case KEY_OP_DIVIDE:
        this.displayed = this.compute
          .push(this.input.flush())
          .pushDivide()
          .result();
        break;

      // unary operations (display computed result)

      case KEY_OP_EQUALS:
        this.displayed = this.compute.push(this.input.flush()).result();
        break;

      case KEY_OP_PERCENT:
        this.displayed = this.compute
          .push(this.input.flush())
          .pushPercent()
          .result();
        break;

      // controls

      case KEY_CTRL_AC:
        this.input.clear();
        this.displayed = this.compute.clear().result();
        break;

      case KEY_CTRL_C:
        this.displayed = this.input.clear();
        break;
    }
  }
}

export default Calculator;
