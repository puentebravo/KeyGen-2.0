import React from "react";
import "./copyBtn.css"

function CopyBtn(props) {

  const status = props.copyStatus
  const copy = props.copyPass;

  return (
        <button
          type="button"
          className="btn btn-warning"
          onClick={copy}
        >
          {status}
        </button>
  );
}

export default CopyBtn;
