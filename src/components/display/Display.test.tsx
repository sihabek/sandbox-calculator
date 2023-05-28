import { render, screen } from "@testing-library/react";
import Display from "./Display";

describe("<Display />", () => {
  test("renders provided text", () => {
    render(<Display displayed="Lorem Ipsum" />);

    expect(screen.getByLabelText("Display")).toHaveAttribute("aria-live", "polite");
    expect(screen.getByLabelText("Display")).toHaveTextContent("Lorem Ipsum");
  });
});
