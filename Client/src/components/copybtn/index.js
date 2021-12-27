import React from "react";
import "./copyBtn.css"

function CopyBtn(props) {
  const password = props.password;
  const copy = props.copyPass;

  return (
    <div className="row justify-content-center" id="copyrow">
      <div className="col-3">
        <button
          type="button"
          className="btn btn-warning"
          onClick={copy(password)}
        >
          Copy to clipboard
        </button>
      </div>
    </div>
  );
}

export default CopyBtn;
