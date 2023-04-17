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
    calc.punchKey("2");
    expect(calc.getDisplayed()).toBe("2");

    calc.punchKey("4");
    expect(calc.getDisplayed()).toBe("24");

    calc.punchKey(".");
    expect(calc.getDisplayed()).toBe("24.");

    calc.punchKey("6");
    expect(calc.getDisplayed()).toBe("24.6");

    calc.punchKey("0");
    expect(calc.getDisplayed()).toBe("24.60");

    calc.punchKey(".");
    expect(calc.getDisplayed()).toBe("24.60"); // ignore repeated separator

    calc.punchKey("2");
    expect(calc.getDisplayed()).toBe("24.602");
  });

  test("Input allows max 15 digits (and separator)", () => {
    calc.punchKey("1");
    calc.punchKey("2");
    calc.punchKey("3");
    calc.punchKey("4");
    calc.punchKey("5");
    calc.punchKey("6");
    calc.punchKey("7");
    calc.punchKey("8");
    calc.punchKey("9");
    calc.punchKey("0");
    calc.punchKey(".");
    calc.punchKey("1");
    calc.punchKey("2");
    calc.punchKey("3");
    calc.punchKey("4");
    expect(calc.getDisplayed()).toBe("1234567890.1234");

    calc.punchKey("5");
    expect(calc.getDisplayed()).toBe("1234567890.1234"); // ignore '5'
  });

  test("Input containing only separator should be treated as empty", () => {
    calc.punchKey(".");
    expect(calc.getDisplayed()).toBe(".");

    calc.punchKey("=");
    expect(calc.getDisplayed()).toBe("0");
  });

  test("Add numbers", () => {
    calc.punchKey("3");
    calc.punchKey("7");
    calc.punchKey("+");
    expect(calc.getDisplayed()).toBe("37");

    calc.punchKey("1");
    calc.punchKey("5");
    expect(calc.getDisplayed()).toBe("15");

    calc.punchKey("=");
    expect(calc.getDisplayed()).toBe("52");
  });

  test("Subtract numbers", () => {
    calc.punchKey("1");
    calc.punchKey("6");
    calc.punchKey("-");
    expect(calc.getDisplayed()).toBe("16");

    calc.punchKey("9");
    expect(calc.getDisplayed()).toBe("9");

    calc.punchKey("=");
    expect(calc.getDisplayed()).toBe("7");
  });

  test("Multiply numbers", () => {
    calc.punchKey("2");
    calc.punchKey(".");
    calc.punchKey("5");
    calc.punchKey("*");
    expect(calc.getDisplayed()).toBe("2.5");

    calc.punchKey("1");
    calc.punchKey(".");
    calc.punchKey("3");
    expect(calc.getDisplayed()).toBe("1.3");

    calc.punchKey("=");
    expect(calc.getDisplayed()).toBe("3.25");
  });

  test("Divide numbers", () => {
    calc.punchKey("5");
    calc.punchKey("/");
    expect(calc.getDisplayed()).toBe("5");

    calc.punchKey("2");
    calc.punchKey("=");
    expect(calc.getDisplayed()).toBe("2.5");
  });

  test("Calculate percent", () => {
    calc.punchKey("4");
    calc.punchKey("5");
    calc.punchKey("%");
    expect(calc.getDisplayed()).toBe("0.45");
  });

  test("Clear all", () => {
    calc.punchKey("2");
    calc.punchKey("+");
    calc.punchKey("3");
    calc.punchKey("AC");
    expect(calc.getDisplayed()).toBe("0");

    calc.punchKey("5");
    calc.punchKey("=");
    expect(calc.getDisplayed()).toBe("5"); // ignore previous input
  });

  test("Clear input", () => {
    calc.punchKey("2");
    calc.punchKey("+");
    calc.punchKey("3");
    calc.punchKey("C");
    expect(calc.getDisplayed()).toBe("0");

    calc.punchKey("5");
    calc.punchKey("=");
    expect(calc.getDisplayed()).toBe("7"); // clear only last input (3)
  });

  test("Chain multiple operations", () => {
    calc.punchKey("6");
    calc.punchKey("+");
    calc.punchKey("3");
    calc.punchKey("/");
    calc.punchKey("2");
    calc.punchKey("*");
    calc.punchKey("2");
    calc.punchKey(".");
    calc.punchKey("5");
    calc.punchKey("C");
    calc.punchKey("3");
    calc.punchKey("=");

    expect(calc.getDisplayed()).toBe("13.5");
  });
});
