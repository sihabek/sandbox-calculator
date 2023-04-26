import { useEffect, useState } from "react";
import { Displayed } from "../types";
import Calculator from "../calculator/Calculator";

const initialyDisplayed: Displayed = {
  value: "",
};

function useCalculator(
  calculator: Calculator
): [Displayed, (key: string) => void] {
  const [displayed, setDisplayed] = useState<Displayed>(initialyDisplayed);

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
