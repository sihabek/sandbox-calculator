import Calculator from "../../calculator/Calculator";
import Display from "../display/Display";
import Keypad from "../keypad/Keypad";
import useCalculator from "./useCalculator";

import "./App.css";

/**
 * Main container component. Composes UI and links it with calculator logic.
 *
 *   +-App--------------------+                  +----------------+                  +--------------+
 *   |  +-Display----------+  |                  |                |                  |              |
 *   |  |            123.4 |  | <-- displayed -- |                | <-- displayed -- |              |
 *   |  +------------------+  |                  |                |                  |              |
 *   |                        |                  |                |                  |              |
 *   |  +-Keypad-----------+  |                  |  useCalculator |                  |  Calculator  |
 *   |  |  ##  ##  ##  ##  |  |                  |                |                  |              |
 *   |  |  ##  ##  ##  ##  |  | --- punchKey --> |                | --- punchKey --> |              |
 *   |  |  ##  ##  ##  ##  |  |                  |                |                  |              |
 *   |  |  ######  ##  ##  |  |                  +----------------+                  +--------------+
 *   |  +------------------+  |
 *   +------------------------+
 */

type AppProps = {
  calculator: Calculator;
};

function App({ calculator }: AppProps) {
  const [displayed, punchKey] = useCalculator(calculator);

  return (
    <div className="calc">
      <Display displayed={displayed} />
      <Keypad onKeyPunch={punchKey} />
    </div>
  );
}

export default App;
