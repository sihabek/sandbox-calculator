import { useEffect, useState } from "react";
import Calculator from "../calculator/Calculator";

function useCalculator(
  calculator: Calculator
): [string, (key: string) => void] {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed(calculator.getDisplayed());
  }, []);

  const punchKey = (key: string) => {
    calculator.punchKey(key);
    setDisplayed(calculator.getDisplayed());
  };

  return [displayed, punchKey];
}

export default useCalculator;
