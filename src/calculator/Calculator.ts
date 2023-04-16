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
 * calc.punchKey("1");
 * console.log(calc.getDisplayd()); --> "1"
 *
 * calc.punchKey("2");
 * console.log(calc.getDisplayed()); --> "12"
 *
 * calc.punchKey("/");
 * console.log(calc.getDisplayed()); --> "12"
 *
 * calc.punchKey("3");
 * console.log(calc.getDisplayed()); --> "3"
 *
 * calc.punchKey("=");
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

      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
        this.displayed = this.input.push(key);
        break;

      // binary operations (compute and display previous operation, start new)

      case "+":
        this.displayed = this.compute
          .push(this.input.flush())
          .pushAdd()
          .result();
        break;

      case "-":
        this.displayed = this.compute
          .push(this.input.flush())
          .pushSubtract()
          .result();
        break;

      case "*":
        this.displayed = this.compute
          .push(this.input.flush())
          .pushMultipy()
          .result();
        break;

      case "/":
        this.displayed = this.compute
          .push(this.input.flush())
          .pushDivide()
          .result();
        break;

      // unary operations (display computed result)

      case "=":
        this.displayed = this.compute.push(this.input.flush()).result();
        break;

      case "%":
        this.displayed = this.compute
          .push(this.input.flush())
          .pushPercent()
          .result();
        break;

      // controls

      case "AC":
        this.input.clear();
        this.displayed = this.compute.clear().result();
        break;

      case "C":
        this.displayed = this.input.clear();
        break;
    }
  }
}

export default Calculator;
