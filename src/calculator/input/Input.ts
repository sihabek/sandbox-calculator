export const MAX_INPUT_LENGTH = 15;

/**
 * Aggregate user input (digits and separator keys). Ignore invalid keys.
 *
 * Example:
 *
 * const input = new Input();
 *
 * console.log(input.push("1")); --> "1"
 * console.log(input.push("2")); --> "12"
 * console.log(input.push(".")); --> "12."
 * console.log(input.push("3")); --> "12.3"
 * console.log(input.push(".")); --> "12.3" - ignore duplicated separator
 *
 * console.log(input.flush()); --> "12.3"
 *
 * console.log(input.push("4")); --> "4" - start over, input was cleared with flush
 * console.log(input.push("5")); --> "45"
 */

class Input {
  private input: string;

  constructor() {
    this.input = "";
  }

  // append key to input, return aggregated input

  public push(key: string): string {
    if (this.input.length < MAX_INPUT_LENGTH) {
      if (!(key === "." && this.input.includes("."))) {
        this.input += key;
      }
    }

    return this.input.length > 0 ? this.input : "0";
  }

  // clear and return aggregated input

  public flush(): string | null {
    const flushed = this.input.length > 0 ? this.input : null;
    this.input = "";

    return flushed;
  }

  // clear aggregated input

  public clear(): string {
    this.input = "";
    return "0";
  }
}

export default Input;
