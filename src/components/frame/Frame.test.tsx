import { render, screen } from "@testing-library/react";
import { Frame, FrameSlot } from "./Frame";

describe("<Frame />", () => {
  test("renders slots", () => {
    render(
      <Frame>
        <FrameSlot>Test Display</FrameSlot>
        <FrameSlot>Test Keypad</FrameSlot>
      </Frame>
    );

    expect(screen.getByText("Test Display")).toBeInTheDocument();
    expect(screen.getByText("Test Keypad")).toBeInTheDocument();
  });
});
