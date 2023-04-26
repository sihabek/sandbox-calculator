import Compute from "./Compute";

describe("Compute", () => {
  let compute: Compute;

  beforeEach(() => {
    compute = new Compute();
  });

  test("compute addition", () => {
    expect(compute.push("2").pushAdd().push("3").result()).toBe("5");
  });

  test("compute subtraction", () => {
    expect(compute.push("3").pushSubtract().push("5").result()).toBe("-2");
  });

  test("compute multiplication", () => {
    expect(compute.push("4").pushMultipy().push("3").result()).toBe("12");
  });

  test("compute division", () => {
    expect(compute.push("9").pushDivide().push("2").result()).toBe("4.5");
  });

  test("compute percent", () => {
    expect(compute.push("35").pushPercent().result()).toBe("0.35");
  });

  test("chain operations", () => {
    expect(compute.push("2").pushAdd().result()).toBe("2");
    expect(compute.push("3").pushDivide().result()).toBe("5");
    expect(compute.push("2").result()).toBe("2.5");
  });

  test("overwrite operation (empty input)", () => {
    expect(compute.push("3").pushAdd().result()).toBe("3");
    expect(compute.push(null).pushSubtract().result()).toBe("3");
    expect(compute.push("2").result()).toBe("1");
  });

  test("clear operation", () => {
    expect(compute.push("2").pushAdd().result()).toBe("2");
    expect(compute.clear().result()).toBe("0");
    expect(compute.push("5").pushSubtract().result()).toBe("5");
    expect(compute.push("1").result()).toBe("4");
  });

  test("error when computed value is geater than max number", () => {
    const maxInput = Number.MAX_VALUE + "";

    compute.push(maxInput).pushMultipy().push("2");
    expect(compute.result()).toBe("Error!");

    // error clears operation

    expect(compute.push("2").pushAdd().push("3").result()).toBe("5");
  });

  test("error when computed value is smaller than max negative number", () => {
    const maxInput = -1 * Number.MAX_VALUE + "";

    compute.push(maxInput).pushMultipy().push("2");
    expect(compute.result()).toBe("Error!");

    // error clears operation

    expect(compute.push("2").pushAdd().push("3").result()).toBe("5");
  });

  test("error when divided by zero", () => {
    compute.push("5").pushDivide().push("0");
    expect(compute.result()).toBe("Error!");

    // error clears operation

    expect(compute.push("2").pushAdd().push("3").result()).toBe("5");
  });
});
