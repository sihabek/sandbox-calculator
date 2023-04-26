import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Display from "../components/display/Display";
import Keypad from "../components/keypad/Keypad";

import Calculator from "../calculator/Calculator";
import useCalculator from "./useCalculator";

function TestComponent({ calculator }: { calculator: Calculator }) {
  const [displayed, punchKey] = useCalculator(calculator);

  return (
    <>
      <Display displayed={displayed} />
      <Keypad onKeyPunch={(key) => punchKey(key)} />
    </>
  );
}

describe("useCalculator", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("display initial value", () => {
    render(<TestComponent calculator={calculator} />);
    expect(screen.getByTitle("Display")).toHaveTextContent("0");
  });

  test("capture input", async () => {
    const user = userEvent.setup();
    render(<TestComponent calculator={calculator} />);

    await user.click(screen.getByRole("button", { name: "1" }));
    expect(screen.getByTitle("Display")).toHaveTextContent("1");

    await user.click(screen.getByRole("button", { name: "2" }));
    expect(screen.getByTitle("Display")).toHaveTextContent("12");

    await user.click(screen.getByRole("button", { name: "." }));
    expect(screen.getByTitle("Display")).toHaveTextContent("12.");

    await user.click(screen.getByRole("button", { name: "3" }));
    expect(screen.getByTitle("Display")).toHaveTextContent("12.3");
  });

  test("allow max 15 characters in input", async () => {
    const user = userEvent.setup();
    render(<TestComponent calculator={calculator} />);

    await user.click(screen.getByRole("button", { name: "1" }));
    await user.click(screen.getByRole("button", { name: "2" }));
    await user.click(screen.getByRole("button", { name: "3" }));
    await user.click(screen.getByRole("button", { name: "4" }));
    await user.click(screen.getByRole("button", { name: "5" }));
    await user.click(screen.getByRole("button", { name: "6" }));
    await user.click(screen.getByRole("button", { name: "7" }));
    await user.click(screen.getByRole("button", { name: "8" }));
    await user.click(screen.getByRole("button", { name: "9" }));
    await user.click(screen.getByRole("button", { name: "0" }));
    await user.click(screen.getByRole("button", { name: "." }));
    await user.click(screen.getByRole("button", { name: "1" }));
    await user.click(screen.getByRole("button", { name: "2" }));
    await user.click(screen.getByRole("button", { name: "3" }));
    await user.click(screen.getByRole("button", { name: "4" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("1234567890.1234");

    await user.click(screen.getByRole("button", { name: "5" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("1234567890.1234");
  });

  test("allow only one decimal separator in input", async () => {
    const user = userEvent.setup();
    render(<TestComponent calculator={calculator} />);

    await user.click(screen.getByRole("button", { name: "5" }));
    await user.click(screen.getByRole("button", { name: "." }));
    await user.click(screen.getByRole("button", { name: "2" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("5.2");

    await user.click(screen.getByRole("button", { name: "5" }));
    await user.click(screen.getByRole("button", { name: "." }));

    expect(screen.getByTitle("Display")).toHaveTextContent("5.25");
  });

  test("add numbers", async () => {
    const user = userEvent.setup();
    render(<TestComponent calculator={calculator} />);

    await user.click(screen.getByRole("button", { name: "3" }));
    await user.click(screen.getByRole("button", { name: "7" }));
    await user.click(screen.getByRole("button", { name: "+" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("37");

    await user.click(screen.getByRole("button", { name: "1" }));
    await user.click(screen.getByRole("button", { name: "5" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("15");

    await user.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("52");
  });

  test("subtract numbers", async () => {
    const user = userEvent.setup();
    render(<TestComponent calculator={calculator} />);

    await user.click(screen.getByRole("button", { name: "1" }));
    await user.click(screen.getByRole("button", { name: "6" }));
    await user.click(screen.getByRole("button", { name: "-" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("16");

    await user.click(screen.getByRole("button", { name: "9" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("9");

    await user.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("7");
  });

  test("multiply numbers", async () => {
    const user = userEvent.setup();
    render(<TestComponent calculator={calculator} />);

    await user.click(screen.getByRole("button", { name: "2" }));
    await user.click(screen.getByRole("button", { name: "." }));
    await user.click(screen.getByRole("button", { name: "5" }));
    await user.click(screen.getByRole("button", { name: "×" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("2.5");

    await user.click(screen.getByRole("button", { name: "1" }));
    await user.click(screen.getByRole("button", { name: "." }));
    await user.click(screen.getByRole("button", { name: "3" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("1.3");

    await user.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("3.25");
  });

  test("divide numbers", async () => {
    const user = userEvent.setup();
    render(<TestComponent calculator={calculator} />);

    await user.click(screen.getByRole("button", { name: "5" }));
    await user.click(screen.getByRole("button", { name: "÷" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("5");

    await user.click(screen.getByRole("button", { name: "2" }));
    await user.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("2.5");
  });

  test("calculate percent", async () => {
    const user = userEvent.setup();
    render(<TestComponent calculator={calculator} />);

    await user.click(screen.getByRole("button", { name: "4" }));
    await user.click(screen.getByRole("button", { name: "5" }));
    await user.click(screen.getByRole("button", { name: "%" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("0.45");
  });

  test("clear all", async () => {
    const user = userEvent.setup();
    render(<TestComponent calculator={calculator} />);

    await user.click(screen.getByRole("button", { name: "2" }));
    await user.click(screen.getByRole("button", { name: "+" }));
    await user.click(screen.getByRole("button", { name: "3" }));
    await user.click(screen.getByRole("button", { name: "AC" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("0");

    await user.click(screen.getByRole("button", { name: "5" }));
    await user.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("5"); // ignore previous input
  });

  test("clear input", async () => {
    const user = userEvent.setup();
    render(<TestComponent calculator={calculator} />);

    await user.click(screen.getByRole("button", { name: "2" }));
    await user.click(screen.getByRole("button", { name: "+" }));
    await user.click(screen.getByRole("button", { name: "3" }));
    await user.click(screen.getByRole("button", { name: "C" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("0");

    await user.click(screen.getByRole("button", { name: "5" }));
    await user.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("7"); // clear only last input (3)
  });

  test("chain multiple operations", async () => {
    const user = userEvent.setup();
    render(<TestComponent calculator={calculator} />);

    await user.click(screen.getByRole("button", { name: "6" }));
    await user.click(screen.getByRole("button", { name: "+" }));
    await user.click(screen.getByRole("button", { name: "3" }));
    await user.click(screen.getByRole("button", { name: "÷" }));
    await user.click(screen.getByRole("button", { name: "2" }));
    await user.click(screen.getByRole("button", { name: "×" }));
    await user.click(screen.getByRole("button", { name: "2" }));
    await user.click(screen.getByRole("button", { name: "." }));
    await user.click(screen.getByRole("button", { name: "5" }));
    await user.click(screen.getByRole("button", { name: "C" }));
    await user.click(screen.getByRole("button", { name: "3" }));
    await user.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTitle("Display")).toHaveTextContent("13.5");
  });
});
