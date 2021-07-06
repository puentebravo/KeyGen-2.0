import React from "react";
import GenerateBtn from "../generatebtn/index";

function PassCardFooter(props) {
  const generatePass = () => {
    const specC = document.querySelector("#spcCharEl");
    const lcChar = document.querySelector("#lCaseEl");
    const ucChar = document.querySelector("#uCaseEl");
    const numChar = document.querySelector("#numCharEl");
    let pwSource = "";
    let password = props.password;

    let pwLength = parseInt(
      prompt(
        "How many characters would you like your password to contain? Please input a number between 8 and 128."
      )
    );

    if (pwLength >= 8 && pwLength <= 128) {
      alert(`Selected ${pwLength} characters.`);

      if (specC) {
        pwSource += "!@#$%^&*.?";
      }
      if (lcChar) {
        pwSource += "abcdefghijklmnopqrstuvwxyz";
      }
      if (ucChar) {
        pwSource += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if (numChar) {
        pwSource += "1234567890";
      }
      console.log(pwSource);
      for (let i = 0, x = pwSource.length; i < pwLength; i++) {
        password += pwSource.charAt(Math.floor(Math.random() * x));
      }
      //Returns password
      return password;
    } else {
      alert(
        "You require more pylons! Try again, and enter a number between 8 and 128."
      );
    }
  }

  return (
    <div className="card-footer">
      {/* <p id="spcCharEl"></p>
      <p id="lCaseEl"></p>
      <p id="uCaseEl"></p>
      <p id="numCharEl"></p> */}
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="spcCharEl" />
        <label class="form-check-label" for="spcCharEl">
          Special Characters
        </label>
      </div>
      <div class="form-check form-switch" id="lCaseEl">
        <input class="form-check-input" type="checkbox" id="lCaseEl" />
        <label class="form-check-label" for="lCaseEl">
          Lower Case Letters
        </label>
      </div>
      <div class="form-check form-switch" id="uCaseEl">
        <input class="form-check-input" type="checkbox" id="uCaseEl" />
        <label class="form-check-label" for="uCaseEl">
          Upper Case Letters
        </label>
      </div>
      <div class="form-check form-switch" id="numCharEl">
        <input class="form-check-input" type="checkbox" id="numCharEl" />
        <label class="form-check-label" for="numCharEl">
          Numbers
        </label>
      </div>
      <GenerateBtn generatePass={generatePass}/>
    </div>
  );
}

export default PassCardFooter;
