import React from "react";
import PassCardFooter from "../passcardfooter/index";
import PassOutput from "../passwordoutput/index";
import "./passcard.css"

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