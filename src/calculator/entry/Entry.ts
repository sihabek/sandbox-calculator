import { MAX_INPUT_LENGTH, KEY_SEPARATOR } from "../../constants";

/**
 * Aggregate user input (digits and separator keys). Ignore invalid keys.
 *
 * Example:
 *
 * const entry = new Entry();
 *
 * console.log(entry.push("1")); --> "1"
 * console.log(entry.push("2")); --> "12"
 * console.log(entry.push(".")); --> "12."
 * console.log(entry.push("3")); --> "12.3"
 * console.log(entry.push(".")); --> "12.3" - ignore duplicated separator
 *
 * console.log(entry.flush()); --> "12.3"
 *
 * console.log(entry.push("4")); --> "4" - start over, entry was cleared with flush
 * console.log(entry.push("5")); --> "45"
 */

class Entry {
  private entry: string;

  constructor() {
    this.entry = "";
  }

  // append key to entry, return aggregated input

  public push(key: string): string {
    if (this.entry.length < MAX_INPUT_LENGTH) {
      if (!(key === KEY_SEPARATOR && this.entry.includes("."))) {
        this.entry += key;
      }
    }

    return this.entry.length > 0 ? this.entry : "0";
  }

  // clear and return aggregated input

  public flush(): string | null {
    let flushed: string | null = null;

    if (this.entry.length > 0 && this.entry !== KEY_SEPARATOR) {
      flushed = this.entry;
    }

    this.entry = "";

    return flushed;
  }

  // clear aggregated input

  public clear(): string {
    this.entry = "";
    return "0";
  }
}

export default Entry;
