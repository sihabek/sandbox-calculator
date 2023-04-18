import Entry from "./Entry";

describe("Entry", () => {
  let entry: Entry;

  beforeEach(() => {
    entry = new Entry();
  });

  test("capture entry and flush it", () => {
    expect(entry.push("1")).toBe("1");
    expect(entry.push("2")).toBe("12");
    expect(entry.push(".")).toBe("12.");
    expect(entry.push("3")).toBe("12.3");
    expect(entry.flush()).toBe("12.3");
    expect(entry.flush()).toBe(null);
  });

  test("allow max 15 characters in entry", () => {
    entry.push("1");
    entry.push("2");
    entry.push("3");
    entry.push("4");
    entry.push("5");
    entry.push("6");
    entry.push("7");
    entry.push("8");
    entry.push("9");
    entry.push("0");
    entry.push(".");
    entry.push("1");
    entry.push("2");
    entry.push("3");

    expect(entry.push("4")).toBe("1234567890.1234");
    expect(entry.push("5")).toBe("1234567890.1234");
  });

  test("allow only one decimal seapartor in entry", () => {
    entry.push("5");
    entry.push(".");
    expect(entry.push("2")).toBe("5.2");

    entry.push("5");
    expect(entry.push(".")).toBe("5.25");
  });

  test("entry containing only separator should flush null", () => {
    expect(entry.push(".")).toBe(".");
    expect(entry.flush()).toBe(null);
  });

  test("clear entry", () => {
    expect(entry.clear()).toBe("0");
    entry.push("1");
    expect(entry.push("2")).toBe("12");
    expect(entry.clear()).toBe("0");
    expect(entry.flush()).toBe(null);
  });
});
