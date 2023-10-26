import { useCallback, useState } from "react";
import Calculator from "../../calculator/Calculator";

function useCalculator(
  calculator: Calculator
): [string, (key: string) => void] {
  const [displayed, setDisplayed] = useState("");

  if (displayed !== calculator.getDisplayed()) {
    setDisplayed(calculator.getDisplayed());
  }

  const punchKey = useCallback(
    (key: string) => {
      calculator.punchKey(key);
      setDisplayed(calculator.getDisplayed());
    },
    [calculator]
  );

  return [displayed, punchKey];
}

export default useCalculator;
