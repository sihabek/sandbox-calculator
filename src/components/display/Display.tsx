import { styled } from "@mui/material";

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
  displayed: string;
};

function Display({ displayed }: DisplayProps) {
  return <DisplayFrame title="Display">{displayed}</DisplayFrame>;
}

export default Display;
