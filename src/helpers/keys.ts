export const MAX_INPUT_LENGTH = 15;

export const KEY_0 = "0";
export const KEY_1 = "1";
export const KEY_2 = "2";
export const KEY_3 = "3";
export const KEY_4 = "4";
export const KEY_5 = "5";
export const KEY_6 = "6";
export const KEY_7 = "7";
export const KEY_8 = "8";
export const KEY_9 = "9";
export const KEY_SEPARATOR = ".";

export const KEY_OP_ADD = "op_add";
export const KEY_OP_SUBTRACT = "op_sub";
export const KEY_OP_MULTIPLY = "op_mul";
export const KEY_OP_DIVIDE = "op_div";
export const KEY_OP_PERCENT = "op_per";
export const KEY_OP_EQUALS = "op_equ";

export const KEY_CTRL_AC = "ctrl_ac";
export const KEY_CTRL_C = "ctrl_c";

/**
 * Convert key value (provided in keydown keyboard event) into KEY_* constant
 * used in application. If key value is not recognized (unknow/unused key)
 * return null.
 *
 * @param key string key property in keydown event
 * @returns string | null
 */

export function key2code(key: string): string | null {
  switch (key) {
    case "0":
      return KEY_0;
    case "1":
      return KEY_1;
    case "2":
      return KEY_2;
    case "3":
      return KEY_3;
    case "4":
      return KEY_4;
    case "5":
      return KEY_5;
    case "6":
      return KEY_6;
    case "7":
      return KEY_7;
    case "8":
      return KEY_8;
    case "9":
      return KEY_9;
    case ".":
    case ",":
      return KEY_SEPARATOR;
    case "+":
      return KEY_OP_ADD;
    case "-":
      return KEY_OP_SUBTRACT;
    case "*":
      return KEY_OP_MULTIPLY;
    case "/":
      return KEY_OP_DIVIDE;
    case "%":
      return KEY_OP_PERCENT;
    case "=":
      return KEY_OP_EQUALS;
    case "Delete":
      return KEY_CTRL_AC;
    case "Backspace":
      return KEY_CTRL_C;
    default:
      return null;
  }
}
