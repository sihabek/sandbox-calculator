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
    expect(screen.getByLabelText("Display")).toHaveTextContent("0");
  });

  test("update display when key is punched", async () => {
    const user = userEvent.setup();
    render(<TestComponent calculator={calculator} />);

    await user.click(screen.getByRole("button", { name: "5" }));
    expect(screen.getByLabelText("Display")).toHaveTextContent("5");

    await user.click(screen.getByRole("button", { name: "+" }));
    expect(screen.getByLabelText("Display")).toHaveTextContent("5");

    await user.click(screen.getByRole("button", { name: "3" }));
    expect(screen.getByLabelText("Display")).toHaveTextContent("3");

    await user.click(screen.getByRole("button", { name: "=" }));
    expect(screen.getByLabelText("Display")).toHaveTextContent("8");
  });
});
