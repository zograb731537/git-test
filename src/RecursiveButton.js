import React, { useState } from "react";

export default function RecursiveButton(props) {
  const [showMode, setShowMode] = useState(false);

  return (
    <>
      <button onClick={() => setShowMode(!showMode)}>
        show,hide next step!
      </button>
      {showMode ? <RecursiveButton /> : null}
    </>
  );
}
