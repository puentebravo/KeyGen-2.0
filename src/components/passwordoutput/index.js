import React from "react";
import "./passwordoutput.css"

function PassOutput() {
    return(
        <div className="card-body">
          <textarea
            readOnly
            id="password"
            placeholder="Your Secure Password"
            aria-label="Generated Password"
          ></textarea>
        </div>
    )
}

export default PassOutput;