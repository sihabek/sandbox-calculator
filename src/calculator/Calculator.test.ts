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

import Calculator from "./Calculator";

describe("Calculator", () => {
  let calc: Calculator;

  beforeEach(() => {
    calc = new Calculator();
  });

  test("Initial value", () => {
    expect(calc.getDisplayed()).toBe("0");
  });

  test("Input number", () => {
    calc.punchKey(KEY_2);
    expect(calc.getDisplayed()).toBe("2");

    calc.punchKey(KEY_4);
    expect(calc.getDisplayed()).toBe("24");

    calc.punchKey(KEY_SEPARATOR);
    expect(calc.getDisplayed()).toBe("24.");

    calc.punchKey(KEY_6);
    expect(calc.getDisplayed()).toBe("24.6");

    calc.punchKey(KEY_0);
    expect(calc.getDisplayed()).toBe("24.60");

    calc.punchKey(KEY_SEPARATOR);
    expect(calc.getDisplayed()).toBe("24.60"); // ignore repeated separator

    calc.punchKey(KEY_2);
    expect(calc.getDisplayed()).toBe("24.602");
  });

  test("Input allows max 15 digits (and separator)", () => {
    calc.punchKey(KEY_1);
    calc.punchKey(KEY_2);
    calc.punchKey(KEY_3);
    calc.punchKey(KEY_4);
    calc.punchKey(KEY_5);
    calc.punchKey(KEY_6);
    calc.punchKey(KEY_7);
    calc.punchKey(KEY_8);
    calc.punchKey(KEY_9);
    calc.punchKey(KEY_0);
    calc.punchKey(KEY_SEPARATOR);
    calc.punchKey(KEY_1);
    calc.punchKey(KEY_2);
    calc.punchKey(KEY_3);
    calc.punchKey(KEY_4);
    expect(calc.getDisplayed()).toBe("1234567890.1234");

    calc.punchKey(KEY_5);
    expect(calc.getDisplayed()).toBe("1234567890.1234"); // ignore '5'
  });

  test("Input containing only separator should be treated as empty", () => {
    calc.punchKey(KEY_SEPARATOR);
    expect(calc.getDisplayed()).toBe(".");

    calc.punchKey(KEY_OP_EQUALS);
    expect(calc.getDisplayed()).toBe("0");
  });

  test("Add numbers", () => {
    calc.punchKey(KEY_3);
    calc.punchKey(KEY_7);
    calc.punchKey(KEY_OP_ADD);
    expect(calc.getDisplayed()).toBe("37");

    calc.punchKey(KEY_1);
    calc.punchKey(KEY_5);
    expect(calc.getDisplayed()).toBe("15");

    calc.punchKey(KEY_OP_EQUALS);
    expect(calc.getDisplayed()).toBe("52");
  });

  test("Subtract numbers", () => {
    calc.punchKey(KEY_1);
    calc.punchKey(KEY_6);
    calc.punchKey(KEY_OP_SUBTRACT);
    expect(calc.getDisplayed()).toBe("16");

    calc.punchKey(KEY_9);
    expect(calc.getDisplayed()).toBe("9");

    calc.punchKey(KEY_OP_EQUALS);
    expect(calc.getDisplayed()).toBe("7");
  });

  test("Multiply numbers", () => {
    calc.punchKey(KEY_2);
    calc.punchKey(KEY_SEPARATOR);
    calc.punchKey(KEY_5);
    calc.punchKey(KEY_OP_MULTIPLY);
    expect(calc.getDisplayed()).toBe("2.5");

    calc.punchKey(KEY_1);
    calc.punchKey(KEY_SEPARATOR);
    calc.punchKey(KEY_3);
    expect(calc.getDisplayed()).toBe("1.3");

    calc.punchKey(KEY_OP_EQUALS);
    expect(calc.getDisplayed()).toBe("3.25");
  });

  test("Divide numbers", () => {
    calc.punchKey(KEY_5);
    calc.punchKey(KEY_OP_DIVIDE);
    expect(calc.getDisplayed()).toBe("5");

    calc.punchKey(KEY_2);
    calc.punchKey(KEY_OP_EQUALS);
    expect(calc.getDisplayed()).toBe("2.5");
  });

  test("Calculate percent", () => {
    calc.punchKey(KEY_4);
    calc.punchKey(KEY_5);
    calc.punchKey(KEY_OP_PERCENT);
    expect(calc.getDisplayed()).toBe("0.45");
  });

  test("Clear all", () => {
    calc.punchKey(KEY_2);
    calc.punchKey(KEY_OP_ADD);
    calc.punchKey(KEY_3);
    calc.punchKey(KEY_CTRL_AC);
    expect(calc.getDisplayed()).toBe("0");

    calc.punchKey(KEY_5);
    calc.punchKey(KEY_OP_EQUALS);
    expect(calc.getDisplayed()).toBe("5"); // ignore previous input
  });

  test("Clear input", () => {
    calc.punchKey(KEY_2);
    calc.punchKey(KEY_OP_ADD);
    calc.punchKey(KEY_3);
    calc.punchKey(KEY_CTRL_C);
    expect(calc.getDisplayed()).toBe("0");

    calc.punchKey(KEY_5);
    calc.punchKey(KEY_OP_EQUALS);
    expect(calc.getDisplayed()).toBe("7"); // clear only last input (3)
  });

  test("Chain multiple operations", () => {
    calc.punchKey(KEY_6);
    calc.punchKey(KEY_OP_ADD);
    calc.punchKey(KEY_3);
    calc.punchKey(KEY_OP_DIVIDE);
    calc.punchKey(KEY_2);
    calc.punchKey(KEY_OP_MULTIPLY);
    calc.punchKey(KEY_2);
    calc.punchKey(KEY_SEPARATOR);
    calc.punchKey(KEY_5);
    calc.punchKey(KEY_CTRL_C);
    calc.punchKey(KEY_3);
    calc.punchKey(KEY_OP_EQUALS);

    expect(calc.getDisplayed()).toBe("13.5");
  });
});
