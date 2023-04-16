import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Keypad from "./Keypad";

describe("<Keypad />", () => {
  test("click on button calls onKeyPunch callback with correct key", async () => {
    const user = userEvent.setup();

    const onPunchMock = vi.fn(() => {});
    render(<Keypad onKeyPunch={onPunchMock} />);

    await user.click(screen.getByRole("button", { name: "AC" }));
    expect(onPunchMock).toHaveBeenCalledWith("AC");

    await user.click(screen.getByRole("button", { name: "C" }));
    expect(onPunchMock).toHaveBeenCalledWith("C");

    await user.click(screen.getByRole("button", { name: "%" }));
    expect(onPunchMock).toHaveBeenCalledWith("%");

    await user.click(screen.getByRole("button", { name: "/" }));
    expect(onPunchMock).toHaveBeenCalledWith("/");

    await user.click(screen.getByRole("button", { name: "7" }));
    expect(onPunchMock).toHaveBeenCalledWith("7");

    await user.click(screen.getByRole("button", { name: "8" }));
    expect(onPunchMock).toHaveBeenCalledWith("8");

    await user.click(screen.getByRole("button", { name: "9" }));
    expect(onPunchMock).toHaveBeenCalledWith("9");

    await user.click(screen.getByRole("button", { name: "*" }));
    expect(onPunchMock).toHaveBeenCalledWith("*");

    await user.click(screen.getByRole("button", { name: "4" }));
    expect(onPunchMock).toHaveBeenCalledWith("4");

    await user.click(screen.getByRole("button", { name: "5" }));
    expect(onPunchMock).toHaveBeenCalledWith("5");

    await user.click(screen.getByRole("button", { name: "6" }));
    expect(onPunchMock).toHaveBeenCalledWith("6");

    await user.click(screen.getByRole("button", { name: "-" }));
    expect(onPunchMock).toHaveBeenCalledWith("-");

    await user.click(screen.getByRole("button", { name: "1" }));
    expect(onPunchMock).toHaveBeenCalledWith("1");

    await user.click(screen.getByRole("button", { name: "2" }));
    expect(onPunchMock).toHaveBeenCalledWith("2");

    await user.click(screen.getByRole("button", { name: "3" }));
    expect(onPunchMock).toHaveBeenCalledWith("3");

    await user.click(screen.getByRole("button", { name: "+" }));
    expect(onPunchMock).toHaveBeenCalledWith("+");

    await user.click(screen.getByRole("button", { name: "0" }));
    expect(onPunchMock).toHaveBeenCalledWith("0");

    await user.click(screen.getByRole("button", { name: "." }));
    expect(onPunchMock).toHaveBeenCalledWith(".");

    await user.click(screen.getByRole("button", { name: "=" }));
    expect(onPunchMock).toHaveBeenCalledWith("=");
  });
});
