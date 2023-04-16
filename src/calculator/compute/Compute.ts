const OPERATION_ADD = "addition";
const OPERATION_SUBTRACT = "subtraction";
const OPERATION_MULTIPLY = "multiplication";
const OPERATION_DIVIDE = "division";

/**
 * Compute value as series of user inputs and operations.
 *
 * Example:
 *
 * const compute = new Compute();
 *
 * compute.push("12").pushDivide().push("3");
 * console.log(compute.result()); --> 4
 *
 * or
 *
 * compute.push(get_user_input()).pushDivide(); <-- 12
 * compute.push(get_user_input()); <-- 3
 * console.log(compute.result()); --> 4
 */

class Compute {
  private value: number;
  private opearation: string | null;

  constructor() {
    this.value = 0;
    this.opearation = null;
  }

  // if binary operation was started, compute it with stored value and current input
  // if not simply store current input

  public push(input: string | null): Compute {
    if (input !== null) {
      const inputValue = parseFloat(input);

      if (this.opearation !== null) {
        switch (this.opearation) {
          case OPERATION_ADD:
            this.value += inputValue;
            break;

          case OPERATION_SUBTRACT:
            this.value -= inputValue;
            break;

          case OPERATION_MULTIPLY:
            this.value *= inputValue;
            break;

          case OPERATION_DIVIDE:
            this.value /= inputValue;
            break;
        }
      } else {
        this.value = inputValue;
      }

      this.opearation = null;
    }

    return this;
  }

  // compute percent (unary operation)

  public pushPercent(): Compute {
    this.value /= 100;
    this.opearation = null;
    return this;
  }

  // store operation to be computed after next input (binary operations)

  public pushAdd(): Compute {
    this.opearation = OPERATION_ADD;
    return this;
  }

  public pushSubtract(): Compute {
    this.opearation = OPERATION_SUBTRACT;
    return this;
  }

  public pushMultipy(): Compute {
    this.opearation = OPERATION_MULTIPLY;
    return this;
  }

  public pushDivide(): Compute {
    this.opearation = OPERATION_DIVIDE;
    return this;
  }

  // go into initial state (forget stored value and operation)

  public clear(): Compute {
    this.value = 0;
    this.opearation = null;
    return this;
  }

  // return current value as string

  public result(): string {
    if (this.value > Number.MAX_VALUE || this.value < -Number.MAX_VALUE) {
      // value goes out of range as result of math operation (including division by zero)
      return "Error!";
    }

    return this.value + "";
  }
}

export default Compute;
