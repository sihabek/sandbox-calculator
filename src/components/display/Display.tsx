import { Displayed } from "../../types";

/**
 * Display provided value in decorated container.
 */

type DisplayProps = {
  displayed: Displayed;
};

function Display({ displayed }: DisplayProps) {
  return <div title="Display">{displayed.value}</div>;
}

export default Display;
