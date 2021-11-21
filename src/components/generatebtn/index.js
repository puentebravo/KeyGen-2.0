import React, { useState } from "react";

function GenerateBtn(props) {
  const generatePass = props.generatePass;

  const [pwLength, setpwLength] = useState()

  // need to figure out a way to grab pw length from the form element

  const handleFormSubmit = (event) => {
    event.preventDefault();
    generatePass(pwLength)
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setpwLength(event.target.value)
  }



  return (
    <div className="row justify-content-center">
        <div className="col-auto">
          <p className="lead">Password Length: </p>
        </div>
        <div className="col-auto">
          <label for="pwLength" className="visually-hidden">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLength"
            placeholder=""
            name="pwLength"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-auto">
          <button
            id="generate"
            className="btn btn-success text-center"
            type="submit"
            onSubmit={handleFormSubmit}
            onClick={handleFormSubmit}
          >
            GENERATE
          </button>
        </div>
    </div>
  );
}

export default GenerateBtn;
