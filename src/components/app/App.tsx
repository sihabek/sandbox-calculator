import { useEffect, useState } from "react";
import { Displayed } from "../../types";
import Calculator from "../../calculator/Calculator";
import { Frame, FrameSlot } from "../frame/Frame";
import Display from "../display/Display";
import Keypad from "../keypad/Keypad";

/**
 * Main container component. Composes UI and links it with calculator logic.
 *
 *   +-Frame------------------+                  +--------------+
 *   |  +-Display----------+  |                  |              |
 *   |  |            123.4 |  | <-- displayed -- |              |
 *   |  +------------------+  |                  |              |
 *   |                        |                  |              |
 *   |  +-Keypad-----------+  |                  |  Calculator  |
 *   |  |  ##  ##  ##  ##  |  |                  |              |
 *   |  |  ##  ##  ##  ##  |  | --- punchKey --> |              |
 *   |  |  ##  ##  ##  ##  |  |                  |              |
 *   |  |  ######  ##  ##  |  |                  +--------------+
 *   |  +------------------+  |
 *   +------------------------+
 */

type AppProps = {
  calculator: Calculator;
};

function App({ calculator }: AppProps) {
  const [displayed, setDisplayed] = useState<Displayed>({ value: "" });

  useEffect(() => {
    setDisplayed(calculator.getDisplayed());
  }, []);

  const handleKeyPunch = (key: string) => {
    calculator.punchKey(key);
    setDisplayed(calculator.getDisplayed());
  };

  return (
    <Frame>
      <FrameSlot>
        <Display displayed={displayed} />
      </FrameSlot>
      <FrameSlot>
        <Keypad onKeyPunch={handleKeyPunch} />
      </FrameSlot>
    </Frame>
  );
}

export default App;
