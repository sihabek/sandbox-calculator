import { styled } from "@mui/material";
import { Displayed } from "../../types";

/**
 * Display provided value in decorated container.
 */

const DisplayFrame = styled("div")(({ theme }) => ({
  fontSize: "3em",
  height: "2em",
  overflow: "hidden",
  padding: theme.spacing(2),
  textAlign: "right",
  width: "100%",
}));

type DisplayProps = {
  displayed: Displayed;
};

function Display({ displayed }: DisplayProps) {
  return <DisplayFrame title="Display">{displayed.value}</DisplayFrame>;
}

export default Display;
