import { render, screen } from "@testing-library/react";
import Display from "./Display";

describe("<Display />", () => {
  test("renders", () => {
    const { asFragment } = render(<Display displayed="Lorem Ipsum" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("displays provided text", () => {
    render(<Display displayed="Lorem Ipsum" />);
    expect(screen.getByLabelText("Display")).toHaveTextContent("Lorem Ipsum");
  });

  test("creates correct aria attributes", () => {
    render(<Display displayed="Lorem Ipsum" />);

    expect(screen.getByLabelText("Display")).toHaveAttribute(
      "aria-live",
      "polite"
    );
  });
});
