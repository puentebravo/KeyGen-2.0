import React, { useState } from "react";
import { Entropy, charSet32 } from "entropy-string";
import PassCardFooter from "../passcardfooter/index";
import PassOutput from "../passwordoutput/index";
import "./passcard.css";

function PassCard() {
  const [password, setPassword] = useState();
  const [copyStatus, setCopyStatus] = useState("Copy");

  // Generates a crytographically secure sequence of characters with 128 bits of entropy
  const generatePass = () => {

    const randomizer = new Entropy({ bits: 128, charset: charSet32 })
    const genPass = randomizer.string()

    setPassword(genPass)

    setCopyStatus("Copy");
  };

  // Copies password output to clipboard on click.
  const copyPass = () => {
    navigator.clipboard.writeText(password);
    setCopyStatus("Copied!");
  };

  const handleFormCopy = (event) => {
    event.stopPropagation();
    copyPass();
  };

  return (
    <div className="card bg-dark">
      <div className="card-header">
        <h2 className="text-center">Generate Password</h2>
      </div>
      <PassOutput password={password} />
      <PassCardFooter
        generatePass={generatePass}
        password={password}
        copyPass={handleFormCopy}
        copyStatus={copyStatus}
      />
    </div>
  );
}

export default PassCard;
