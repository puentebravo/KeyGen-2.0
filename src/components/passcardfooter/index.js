import React from "react";
import GenerateBtn from "../generatebtn/index";
import "./passcardfooter.css"

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