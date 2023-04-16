import CalculatorInput from "./Input";

describe("CalculatorInput", () => {
  let input: CalculatorInput;

  beforeEach(() => {
    input = new CalculatorInput();
  });

  test("capture input and flush it", () => {
    expect(input.push("1")).toBe("1");
    expect(input.push("2")).toBe("12");
    expect(input.push(".")).toBe("12.");
    expect(input.push("3")).toBe("12.3");
    expect(input.flush()).toBe("12.3");
    expect(input.flush()).toBe(null);
  });

  test("allow max 15 characters in input", () => {
    input.push("1");
    input.push("2");
    input.push("3");
    input.push("4");
    input.push("5");
    input.push("6");
    input.push("7");
    input.push("8");
    input.push("9");
    input.push("0");
    input.push(".");
    input.push("1");
    input.push("2");
    input.push("3");

    expect(input.push("4")).toBe("1234567890.1234");
    expect(input.push("5")).toBe("1234567890.1234");
  });

  test("allow only one decimal seapartor in input", () => {
    input.push("5");
    input.push(".");
    expect(input.push("2")).toBe("5.2");

    input.push("5");
    expect(input.push(".")).toBe("5.25");
  });

  test("clear input", () => {
    expect(input.clear()).toBe("0");
    input.push("1");
    expect(input.push("2")).toBe("12");
    expect(input.clear()).toBe("0");
    expect(input.flush()).toBe(null);
  });
});
