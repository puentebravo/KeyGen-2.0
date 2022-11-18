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
          id="generate"
          className="btn btn-success text-center"
          type="submit"
          onSubmit={handleFormSubmit}
          onClick={handleFormSubmit}
        >
          GENERATE
        </button>
      </div>
      <div className="col-auto">
        <CopyBtn copyStatus={props.copyStatus} copyPass={props.copyPass} />
      </div>
    </div>
  );
}

export default GenerateBtn;
