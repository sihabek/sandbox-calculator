import { vi } from "vitest";
import { getByRole, render, screen } from "@testing-library/react";
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
} from "../../helpers/keys";

import Keypad from "./Keypad";

describe("<Keypad />", () => {
  test("renders", () => {
    const { asFragment } = render(<Keypad onKeyPunch={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("click on button calls onKeyPunch callback with correct key", async () => {
    const user = userEvent.setup();

    const onPunchMock = vi.fn(() => {});
    render(<Keypad onKeyPunch={onPunchMock} />);

    const keypad = screen.getByLabelText("Keypad");
    expect(keypad).toBeInTheDocument();

    await user.click(getByRole(keypad, "button", { name: "AC" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_CTRL_AC);

    await user.click(getByRole(keypad, "button", { name: "C" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_CTRL_C);

    await user.click(getByRole(keypad, "button", { name: "%" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_OP_PERCENT);

    await user.click(getByRole(keypad, "button", { name: "÷" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_OP_DIVIDE);

    await user.click(getByRole(keypad, "button", { name: "7" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_7);

    await user.click(getByRole(keypad, "button", { name: "8" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_8);

    await user.click(getByRole(keypad, "button", { name: "9" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_9);

    await user.click(getByRole(keypad, "button", { name: "×" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_OP_MULTIPLY);

    await user.click(getByRole(keypad, "button", { name: "4" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_4);

    await user.click(getByRole(keypad, "button", { name: "5" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_5);

    await user.click(getByRole(keypad, "button", { name: "6" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_6);

    await user.click(getByRole(keypad, "button", { name: "-" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_OP_SUBTRACT);

    await user.click(getByRole(keypad, "button", { name: "1" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_1);

    await user.click(getByRole(keypad, "button", { name: "2" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_2);

    await user.click(getByRole(keypad, "button", { name: "3" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_3);

    await user.click(getByRole(keypad, "button", { name: "+" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_OP_ADD);

    await user.click(getByRole(keypad, "button", { name: "0" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_0);

    await user.click(getByRole(keypad, "button", { name: "." }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_SEPARATOR);

    await user.click(getByRole(keypad, "button", { name: "=" }));
    expect(onPunchMock).toHaveBeenCalledWith(KEY_OP_EQUALS);
  });
});
