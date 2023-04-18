import { render, screen } from "@testing-library/react";
import Display from "./Display";

describe("<Display />", () => {
  test("renders provided text", () => {
    render(<Display displayed={{ value: "Lorem Ipsum" }} />);
    expect(screen.getByTitle("Display")).toHaveTextContent("Lorem Ipsum");
  });
});
