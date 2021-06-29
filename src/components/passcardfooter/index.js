import React from "react";
import GenerateBtn from "../generatebtn/index";

function PassCardFooter() {
  return (
    <div className="card-footer">
      {/* <p id="spcCharEl"></p>
      <p id="lCaseEl"></p>
      <p id="uCaseEl"></p>
      <p id="numCharEl"></p> */}
      <div class="form-check form-switch" id="spcCharEl">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault">
          Special Characters
        </label>
      </div>
      <div class="form-check form-switch" id="lCaseEl">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault">
          Lower Case Letters
        </label>
      </div>
      <div class="form-check form-switch" id="uCaseEl">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault">
          Upper Case Letters
        </label>
      </div>
      <div class="form-check form-switch" id="numCharEl">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault">
          Numbers
        </label>
      </div>
      <GenerateBtn />
    </div>
  );
}

export default PassCardFooter;
