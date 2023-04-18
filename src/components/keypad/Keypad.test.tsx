import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
} from "../../constants";

import Keypad from "./Keypad";

describe("<Keypad />", () => {
  test("click on button calls onKeyPunch callback with correct key", async () => {
    const user = userEvent.setup();

    const onPunchMock = vi.fn(() => {});
    render(<Keypad onKeyPunch={onPunchMock} />);

    await user.click(screen.getByRole("button", { name: "AC" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_CTRL_AC);

    await user.click(screen.getByRole("button", { name: "C" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_CTRL_C);

    await user.click(screen.getByRole("button", { name: "%" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_OP_PERCENT);

    await user.click(screen.getByRole("button", { name: "÷" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_OP_DIVIDE);

    await user.click(screen.getByRole("button", { name: "7" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_7);

    await user.click(screen.getByRole("button", { name: "8" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_8);

    await user.click(screen.getByRole("button", { name: "9" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_9);

    await user.click(screen.getByRole("button", { name: "×" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_OP_MULTIPLY);

    await user.click(screen.getByRole("button", { name: "4" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_4);

    await user.click(screen.getByRole("button", { name: "5" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_5);

    await user.click(screen.getByRole("button", { name: "6" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_6);

    await user.click(screen.getByRole("button", { name: "-" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_OP_SUBTRACT);

    await user.click(screen.getByRole("button", { name: "1" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_1);

    await user.click(screen.getByRole("button", { name: "2" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_2);

    await user.click(screen.getByRole("button", { name: "3" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_3);

    await user.click(screen.getByRole("button", { name: "+" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_OP_ADD);

    await user.click(screen.getByRole("button", { name: "0" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_0);

    await user.click(screen.getByRole("button", { name: "." }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_SEPARATOR);

    await user.click(screen.getByRole("button", { name: "=" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_OP_EQUALS);
  });
});
