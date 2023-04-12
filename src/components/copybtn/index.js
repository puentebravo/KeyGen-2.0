import React from "react";
import "./copyBtn.css"

function CopyBtn(props) {

  const status = props.copyStatus
  const copy = props.copyPass;

  return (
        // <button
        //   type="button"
        //   className="btn btn-warning"
        //   onClick={copy}
        // >
        //   {status}
        // </button>
        <button
          className="cybr-btn mt-2"
          id="generate"
          type="button"
          onClick={copy}
        >
          {status}<span aria-hidden>_</span>
          <span aria-hidden className="cybr-btn__glitch">
            GENERATE_
          </span>
          <span aria-hidden className="cybr-btn__tag">
            C77
          </span>
        </button>
  );
}

export default CopyBtn;
