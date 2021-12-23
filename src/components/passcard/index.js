import React, { useState } from "react";
import PassCardFooter from "../passcardfooter/index";
import PassOutput from "../passwordoutput/index";
import "./passcard.css";

function PassCard() {
  const [password, setPassword] = useState();

  const generatePass = (pwLength) => {
    let numLength = parseInt(pwLength);

    let pwSource =
      "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.!@#$%^&*.,?";
    let genPass = "";

    if (numLength >= 8 && numLength <= 128) {
      console.log(pwSource);
      for (let i = 0, x = pwSource.length; i < numLength; i++) {
        genPass += pwSource.charAt(Math.floor(Math.random() * x));
      }
      setPassword(genPass);
    } else {
      setPassword(
        "You require more pylons! Please select a number between 8 and 128."
      );
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-center">Generate Password</h2>
      </div>
      <PassOutput password={password} />

      <PassCardFooter generatePass={generatePass} />
    </div>
  );
}

export default PassCard;
