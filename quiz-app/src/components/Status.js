import React from "react";

function Status() {
  return (
    <div>
      <div classname="Header">
        <div classname="LeftSide">
          <div classname="ProgressBar">
            <span classname="Percent">70%</span>
          </div>
        </div>
        <div classname="RightSide">
          <div classname="CurrentQuestion">7</div>
        </div>
      </div>
    </div>
  )

}

export default Status;
