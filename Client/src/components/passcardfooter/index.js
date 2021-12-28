import React from "react";
import GenerateBtn from "../generatebtn/index";

function PassCardFooter(props) {
  return (
    <div className="card-footer">
      <GenerateBtn
        generatePass={props.generatePass}
        password={props.password}
        copyPass={props.copyPass}
        copyStatus={props.copyStatus}
      />
    </div>
  );
}

export default PassCardFooter;
