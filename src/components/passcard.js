import React from "react";
import PassCardFooter from "./passcardfooter";
import PassOutput from "./passwordoutput";

function PassCard() {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Generate Password</h2>
      </div>
      <PassOutput />
      <PassCardFooter />
    </div>
  );
}

export default PassCard;