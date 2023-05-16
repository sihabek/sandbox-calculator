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
  key2code,
} from "./keys";

describe("key2code", () => {
  test("key 0", () => {
    expect(key2code("0")).toBe(KEY_0);
  });

  test("key 1", () => {
    expect(key2code("1")).toBe(KEY_1);
  });

  test("key 2", () => {
    expect(key2code("2")).toBe(KEY_2);
  });

  test("key 3", () => {
    expect(key2code("3")).toBe(KEY_3);
  });

  test("key 4", () => {
    expect(key2code("4")).toBe(KEY_4);
  });

  test("key 5", () => {
    expect(key2code("5")).toBe(KEY_5);
  });

  test("key 6", () => {
    expect(key2code("6")).toBe(KEY_6);
  });

  test("key 7", () => {
    expect(key2code("7")).toBe(KEY_7);
  });

  test("key 8", () => {
    expect(key2code("8")).toBe(KEY_8);
  });

  test("key 9", () => {
    expect(key2code("9")).toBe(KEY_9);
  });

  test("separator key", () => {
    expect(key2code(".")).toBe(KEY_SEPARATOR);
    expect(key2code(",")).toBe(KEY_SEPARATOR);
  });

  test("operation add", () => {
    expect(key2code("+")).toBe(KEY_OP_ADD);
  });

  test("operation subtract", () => {
    expect(key2code("-")).toBe(KEY_OP_SUBTRACT);
  });

  test("operation multiply", () => {
    expect(key2code("*")).toBe(KEY_OP_MULTIPLY);
  });

  test("operation divide", () => {
    expect(key2code("/")).toBe(KEY_OP_DIVIDE);
  });

  test("key all clear", () => {
    expect(key2code("Delete")).toBe(KEY_CTRL_AC);
  });

  test("key clear", () => {
    expect(key2code("Backspace")).toBe(KEY_CTRL_C);
  });
});
