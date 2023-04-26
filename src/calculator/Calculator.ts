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

import Entry from "./entry/Entry";
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
  private entry: Entry;
  private compute: Compute;
  private displayed: string;

  constructor() {
    this.entry = new Entry();
    this.compute = new Compute();
    this.displayed = this.compute.result();
  }

  public getDisplayed(): string {
    return this.displayed;
  }

  public punchKey(key: string): void {
    this.displayed = this.processKeyPunch(key);
  }

  // return new displayed value after key punch

  private processKeyPunch(key: string): string {
    switch (key) {
      // value input (display aggregated input)

      case KEY_0:
        return this.entry.push("0");

      case KEY_1:
        return this.entry.push("1");

      case KEY_2:
        return this.entry.push("2");

      case KEY_3:
        return this.entry.push("3");

      case KEY_4:
        return this.entry.push("4");

      case KEY_5:
        return this.entry.push("5");

      case KEY_6:
        return this.entry.push("6");

      case KEY_7:
        return this.entry.push("7");

      case KEY_8:
        return this.entry.push("8");

      case KEY_9:
        return this.entry.push("9");

      case KEY_SEPARATOR:
        return this.entry.push(".");

      // binary operations (compute and display previous operation, start new)

      case KEY_OP_ADD:
        return this.compute.push(this.entry.flush()).pushAdd().result();

      case KEY_OP_SUBTRACT:
        return this.compute.push(this.entry.flush()).pushSubtract().result();

      case KEY_OP_MULTIPLY:
        return this.compute.push(this.entry.flush()).pushMultipy().result();

      case KEY_OP_DIVIDE:
        return this.compute.push(this.entry.flush()).pushDivide().result();

      // unary operations (display computed result)

      case KEY_OP_EQUALS:
        return this.compute.push(this.entry.flush()).result();

      case KEY_OP_PERCENT:
        return this.compute.push(this.entry.flush()).pushPercent().result();

      // controls

      case KEY_CTRL_AC:
        this.entry.clear();
        return this.compute.clear().result();

      case KEY_CTRL_C:
        return this.entry.clear();

      default:
        return this.compute.result();
    }
  }
}

export default Calculator;
