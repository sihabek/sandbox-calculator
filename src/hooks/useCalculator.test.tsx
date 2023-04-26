import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { KEY_3, KEY_5, KEY_OP_ADD, KEY_OP_EQUALS } from "../constants";
import Calculator from "../calculator/Calculator";
import useCalculator from "./useCalculator";

function TestComponent({ calculator }: { calculator: Calculator }) {
  const [displayed, punch] = useCalculator(calculator);

  return (
    <>
      <div title="display">{displayed}</div>
      <div>
        <button onClick={() => punch(KEY_3)}>3</button>
        <button onClick={() => punch(KEY_5)}>5</button>
        <button onClick={() => punch(KEY_OP_ADD)}>+</button>
        <button onClick={() => punch(KEY_OP_EQUALS)}>=</button>
      </div>
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
    expect(screen.getByTitle("display")).toHaveTextContent("0");
  });

  test("update display when key is punched", async () => {
    const user = userEvent.setup();
    render(<TestComponent calculator={calculator} />);

    await user.click(screen.getByRole("button", { name: "5" }));
    expect(screen.getByTitle("display")).toHaveTextContent("5");

    await user.click(screen.getByRole("button", { name: "+" }));
    expect(screen.getByTitle("display")).toHaveTextContent("5");

    await user.click(screen.getByRole("button", { name: "3" }));
    expect(screen.getByTitle("display")).toHaveTextContent("3");

    await user.click(screen.getByRole("button", { name: "=" }));
    expect(screen.getByTitle("display")).toHaveTextContent("8");
  });
});
