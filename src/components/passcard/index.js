import React, { useEffect, useState } from "react";
import PassCardFooter from "../passcardfooter/index";
import PassOutput from "../passwordoutput/index";
import "./passcard.css";

function PassCard() {
  const [password, setPassword] = useState([]);

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-center">Generate Password</h2>
      </div>
      <PassOutput password={password} />
      <PassCardFooter password={password} />
    </div>
  );
}

export default PassCard;
