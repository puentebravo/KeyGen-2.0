import React from "react";

function PassOutput() {
    return(
        <div className="card-body">
          <textarea
            readonly
            id="password"
            placeholder="Your Secure Password"
            aria-label="Generated Password"
          ></textarea>
        </div>
    )
}

export default PassOutput;