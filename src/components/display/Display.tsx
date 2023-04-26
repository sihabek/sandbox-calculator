/**
 * Display provided value in decorated container.
 */

import "./Dislay.css";

type DisplayProps = {
  displayed: string;
};

function Display({ displayed }: DisplayProps) {
  return (
    <div className="display" title="Display">
      {displayed}
    </div>
  );
}

export default Display;
