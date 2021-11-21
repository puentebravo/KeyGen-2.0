import React from "react";
import "./passwordoutput.css"

function PassOutput(props) {

  const generatedPass = props.password

    return(
        <div className="card-body">
          <textarea
            readOnly
            id="password"
            placeholder="Your Secure Password"
            value={generatedPass}
            aria-label="Generated Password"
          ></textarea>
        </div>
    )
}

export default PassOutput;