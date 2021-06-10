import React from "react";
import GenerateBtn from "../generatebtn/index";

function PassCardFooter() {
    return (
        <div className="card-footer">
        <p id="spcCharEl"></p>
        <p id="lCaseEl"></p>
        <p id="uCaseEl"></p>
        <p id="numCharEl"></p>
        <GenerateBtn />
      </div>
    )
}

export default PassCardFooter;