import React from "react";
import GenerateBtn from "../generatebtn/index";
import "./passcardfooter.css";

function PassCardFooter() {
  return (
    <div className="card-footer">
      {/* <p id="spcCharEl"></p>
        <p id="lCaseEl"></p>
        <p id="uCaseEl"></p>
        <p id="numCharEl"></p> */}
      <label className="switch" id="spcCharEl">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
      <label className="switch" id="lCaseEl">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
      <label className="switch" id="uCaseEl">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
      <label className="switch" id="numCharEl">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
      <GenerateBtn />
    </div>
  );
}

export default PassCardFooter;
