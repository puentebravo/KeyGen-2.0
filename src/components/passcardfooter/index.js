import React from "react";
import GenerateBtn from "../generatebtn/index";

function PassCardFooter(props) {
  return (
    <div className="card-footer">
      <GenerateBtn generatePass={props.generatePass} />
    </div>
  );
}

export default PassCardFooter;
