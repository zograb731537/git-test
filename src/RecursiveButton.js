import React, { useState } from "react";

export default function RecursiveButton(props) {


  const [showMode,setShowmode] = useState(false);

  const changeMode = () => {
    setShowmode(!showMode)
  }

  return(
    <div>
      <button onClick={changeMode}>
        show-hide next step!
      </button>
      {showMode ? <RecursiveButton /> : null}
    </div>
  )

}
