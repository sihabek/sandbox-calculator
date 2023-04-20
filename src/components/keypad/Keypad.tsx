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

/**
 * Keypad is collection of keys (buttons) organized in grid. Click on each button
 * calls onKeyPunch callback method with related key as parameter.
 *
 *    +------------------------------+
 *    |                              |
 *    |  ( AC)  ( C )  ( % )  ( / )  |
 *    |                              |
 *    |  ( 7 )  ( 8 )  ( 9 )  ( * )  |
 *    |                              |
 *    |  ( 4 )  ( 5 )  ( 6 )  ( - )  |
 *    |                              |
 *    |  ( 1 )  ( 2 )  ( 3 )  ( + )  |
 *    |                              |
 *    |  (     0    )  ( . )  ( = )  |
 *    |                              |
 *    +------------------------------+
 */

type KeypadProps = {
  onKeyPunch: (key: string) => void;
};

function Keypad({ onKeyPunch }: KeypadProps) {
  return (
    <div>
      {/* First row - [AC] [C] [%] [/] */}

      <button onClick={() => onKeyPunch(KEY_CTRL_AC)}>AC</button>

      <button onClick={() => onKeyPunch(KEY_CTRL_C)}>C</button>

      <button onClick={() => onKeyPunch(KEY_OP_PERCENT)}>%</button>

      <button onClick={() => onKeyPunch(KEY_OP_DIVIDE)}>÷</button>

      {/* Second row - [7] [8] [9] [*] */}

      <button onClick={() => onKeyPunch(KEY_7)}>7</button>

      <button onClick={() => onKeyPunch(KEY_8)}>8</button>

      <button onClick={() => onKeyPunch(KEY_9)}>9</button>

      <button onClick={() => onKeyPunch(KEY_OP_MULTIPLY)}>×</button>

      {/* Third row - [4] [5] [6] [-] */}

      <button onClick={() => onKeyPunch(KEY_4)}>4</button>

      <button onClick={() => onKeyPunch(KEY_5)}>5</button>

      <button onClick={() => onKeyPunch(KEY_6)}>6</button>

      <button onClick={() => onKeyPunch(KEY_OP_SUBTRACT)}>-</button>

      {/* Fourth row - [1] [2] [3] [+] */}

      <button onClick={() => onKeyPunch(KEY_1)}>1</button>

      <button onClick={() => onKeyPunch(KEY_2)}>2</button>

      <button onClick={() => onKeyPunch(KEY_3)}>3</button>

      <button onClick={() => onKeyPunch(KEY_OP_ADD)}>+</button>

      {/* Fifth row - [ 0 ] [.] [=] */}

      <button onClick={() => onKeyPunch(KEY_0)}>0</button>

      <button onClick={() => onKeyPunch(KEY_SEPARATOR)}>.</button>

      <button onClick={() => onKeyPunch(KEY_OP_EQUALS)}>=</button>
    </div>
  );
}

export default Keypad;
