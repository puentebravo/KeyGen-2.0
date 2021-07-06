import React from "react";

function GenerateBtn(props) {

  const generatePass = props.generatePass

  return (
    <div className="row justify-content-center">
    <button id="generate" className="btn btn-success text-center" onClick={generatePass}>
      GENERATE
    </button>
    </div>
  );
}

export default GenerateBtn;