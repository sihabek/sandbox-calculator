import { Displayed } from "../../types";

/**
 * Display provided value in decorated container.
 */

import "./Dislay.css";

type DisplayProps = {
  displayed: Displayed;
};

function Display({ displayed }: DisplayProps) {
  return (
    <div className="display" title="Display">
      {displayed.value}
    </div>
  );
}

export default Display;
