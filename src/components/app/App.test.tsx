import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Calculator from "../../calculator/Calculator";
import App from "./App";

describe("<App />", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("display initial value", () => {
    render(<App calculator={calculator} />);
    expect(screen.getByLabelText("Display")).toHaveTextContent("0");
  });

  test("update display when key is punched", async () => {
    const user = userEvent.setup();
    render(<App calculator={calculator} />);

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
