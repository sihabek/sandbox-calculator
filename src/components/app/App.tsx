import { useEffect, useState } from "react";
import { Displayed } from "../../types";
import Calculator from "../../calculator/Calculator";
import Display from "../display/Display";
import Keypad from "../keypad/Keypad";

import "./App.css";

/**
 * Main container component. Composes UI and links it with calculator logic.
 *
 *   +-App--------------------+                  +--------------+
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
    <div className="calc">
      <Display displayed={displayed} />
      <Keypad onKeyPunch={handleKeyPunch} />
    </div>
  );
}

export default App;
