import React from "react";
import CopyBtn from "../copybtn";

function GenerateBtn(props) {
  const generatePass = props.generatePass;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    generatePass();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-auto">
        <button
          className="cybr-btn mt-2"
          id="generate"
          type="submit"
          onSubmit={handleFormSubmit}
          onClick={handleFormSubmit}
        >
          GENERATE<span aria-hidden>_</span>
          <span aria-hidden className="cybr-btn__glitch">
            GENERATE_
          </span>
          <span aria-hidden className="cybr-btn__tag">
            C77
          </span>
        </button>
      </div>
      <div className="col-auto">
        <CopyBtn copyStatus={props.copyStatus} copyPass={props.copyPass} />
      </div>
    </div>
  );
}

export default GenerateBtn;
