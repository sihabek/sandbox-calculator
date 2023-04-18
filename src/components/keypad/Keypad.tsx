import { Button, Grid, styled } from "@mui/material";

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
 * Keypad is collection of keys (buttons) organized in grid. Click on each Button
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

const OperationButton = styled(Button)((props) => ({
  backgroundColor: "rgb(254,241,73,.1)",
  borderColor: "rgb(255, 241, 73, .5)",
}));

type KeypadProps = {
  onKeyPunch: (key: string) => void;
};

function Keypad({ onKeyPunch }: KeypadProps) {
  return (
    <Grid container spacing={1}>
      {/* First row - [AC] [C] [%] [/] */}

      <Grid item xs={3}>
        <OperationButton
          fullWidth
          variant="outlined"
          onClick={() => onKeyPunch(KEY_CTRL_AC)}
        >
          AC
        </OperationButton>
      </Grid>

      <Grid item xs={3}>
        <OperationButton
          fullWidth
          variant="outlined"
          onClick={() => onKeyPunch(KEY_CTRL_C)}
        >
          C
        </OperationButton>
      </Grid>

      <Grid item xs={3}>
        <OperationButton
          fullWidth
          variant="outlined"
          onClick={() => onKeyPunch(KEY_OP_PERCENT)}
        >
          %
        </OperationButton>
      </Grid>

      <Grid item xs={3}>
        <OperationButton
          fullWidth
          variant="outlined"
          onClick={() => onKeyPunch(KEY_OP_DIVIDE)}
        >
          /
        </OperationButton>
      </Grid>

      {/* Second row - [7] [8] [9] [*] */}

      <Grid item xs={3}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch(KEY_7)}>
          7
        </Button>
      </Grid>

      <Grid item xs={3}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch(KEY_8)}>
          8
        </Button>
      </Grid>

      <Grid item xs={3}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch(KEY_9)}>
          9
        </Button>
      </Grid>

      <Grid item xs={3}>
        <OperationButton
          fullWidth
          variant="outlined"
          onClick={() => onKeyPunch(KEY_OP_MULTIPLY)}
        >
          *
        </OperationButton>
      </Grid>

      {/* Third row - [4] [5] [6] [-] */}

      <Grid item xs={3}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch(KEY_4)}>
          4
        </Button>
      </Grid>

      <Grid item xs={3}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch(KEY_5)}>
          5
        </Button>
      </Grid>

      <Grid item xs={3}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch(KEY_6)}>
          6
        </Button>
      </Grid>

      <Grid item xs={3}>
        <OperationButton
          fullWidth
          variant="outlined"
          onClick={() => onKeyPunch(KEY_OP_SUBTRACT)}
        >
          -
        </OperationButton>
      </Grid>

      {/* Fourth row - [1] [2] [3] [+] */}

      <Grid item xs={3}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch(KEY_1)}>
          1
        </Button>
      </Grid>

      <Grid item xs={3}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch(KEY_2)}>
          2
        </Button>
      </Grid>

      <Grid item xs={3}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch(KEY_3)}>
          3
        </Button>
      </Grid>

      <Grid item xs={3}>
        <OperationButton
          fullWidth
          variant="outlined"
          onClick={() => onKeyPunch(KEY_OP_ADD)}
        >
          +
        </OperationButton>
      </Grid>

      {/* Fifth row - [ 0 ] [.] [=] */}

      <Grid item xs={6}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch(KEY_0)}>
          0
        </Button>
      </Grid>

      <Grid item xs={3}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => onKeyPunch(KEY_SEPARATOR)}
        >
          .
        </Button>
      </Grid>

      <Grid item xs={3}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => onKeyPunch(KEY_OP_EQUALS)}
        >
          =
        </Button>
      </Grid>
    </Grid>
  );
}

export default Keypad;
