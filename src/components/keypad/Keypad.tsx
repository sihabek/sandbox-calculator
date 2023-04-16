import { Button, Grid, styled } from "@mui/material";

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
          onClick={() => onKeyPunch("AC")}
        >
          AC
        </OperationButton>
      </Grid>

      <Grid item xs={3}>
        <OperationButton
          fullWidth
          variant="outlined"
          onClick={() => onKeyPunch("C")}
        >
          C
        </OperationButton>
      </Grid>

      <Grid item xs={3}>
        <OperationButton
          fullWidth
          variant="outlined"
          onClick={() => onKeyPunch("%")}
        >
          %
        </OperationButton>
      </Grid>

      <Grid item xs={3}>
        <OperationButton
          fullWidth
          variant="outlined"
          onClick={() => onKeyPunch("/")}
        >
          /
        </OperationButton>
      </Grid>

      {/* Second row - [7] [8] [9] [*] */}

      <Grid item xs={3}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch("7")}>
          7
        </Button>
      </Grid>

      <Grid item xs={3}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch("8")}>
          8
        </Button>
      </Grid>

      <Grid item xs={3}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch("9")}>
          9
        </Button>
      </Grid>

      <Grid item xs={3}>
        <OperationButton
          fullWidth
          variant="outlined"
          onClick={() => onKeyPunch("*")}
        >
          *
        </OperationButton>
      </Grid>

      {/* Third row - [4] [5] [6] [-] */}

      <Grid item xs={3}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch("4")}>
          4
        </Button>
      </Grid>

      <Grid item xs={3}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch("5")}>
          5
        </Button>
      </Grid>

      <Grid item xs={3}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch("6")}>
          6
        </Button>
      </Grid>

      <Grid item xs={3}>
        <OperationButton
          fullWidth
          variant="outlined"
          onClick={() => onKeyPunch("-")}
        >
          -
        </OperationButton>
      </Grid>

      {/* Fourth row - [1] [2] [3] [+] */}

      <Grid item xs={3}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch("1")}>
          1
        </Button>
      </Grid>

      <Grid item xs={3}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch("2")}>
          2
        </Button>
      </Grid>

      <Grid item xs={3}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch("3")}>
          3
        </Button>
      </Grid>

      <Grid item xs={3}>
        <OperationButton
          fullWidth
          variant="outlined"
          onClick={() => onKeyPunch("+")}
        >
          +
        </OperationButton>
      </Grid>

      {/* Fifth row - [ 0 ] [.] [=] */}

      <Grid item xs={6}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch("0")}>
          0
        </Button>
      </Grid>

      <Grid item xs={3}>
        <Button fullWidth variant="outlined" onClick={() => onKeyPunch(".")}>
          .
        </Button>
      </Grid>

      <Grid item xs={3}>
        <Button fullWidth variant="contained" onClick={() => onKeyPunch("=")}>
          =
        </Button>
      </Grid>
    </Grid>
  );
}

export default Keypad;
