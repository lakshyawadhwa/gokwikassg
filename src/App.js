import gokwiklogo from "./logo.svg";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Confirmation from "./Components/Confirmation";
function App() {
  const [active, setActive] = useState(false);
  const [phoneNo, setPhoneNo] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    let number = localStorage.getItem("phoneNo");
    if (number) {
      setSubmitted(true);
    }
  });
  function handleChange(e) {
    if (e.target.value.length == 10) {
      let regex = new RegExp("^[7-9][0-9]{9}$");
      if (regex.test(e.target.value)) {
        setActive(true);
        setPhoneError(false);
        setPhoneNo(e.target.value);
      } else {
        setActive(false);
        setPhoneError(true);
      }
    } else {
      setActive(false);
    }
  }
  function handleSubmit() {
    localStorage.setItem("phoneNo", phoneNo);
    setSubmitted(true);
  }
  return (
    <div className="App">
      <div className="wrapper">
        <div className="header">
          <div className="header-logo">
            <img class="logo" src="./images/man-matters.png"></img>
            <span>
              <span className="gradient">Congratulations </span>&#x1f973;
            </span>
          </div>
          <img className="paytm-ss" src="./images/paytm_image_ss.png"></img>
        </div>
        <div className="bottom-half-wrapper">
          {submitted && <Confirmation />}
          {!submitted && (
            <main>
              <p>
                You have WON Paytm Gift Card of Rs 200 for{" "}
                <b>placing the order on Man Matters</b>
              </p>
              <input
                id="phone-input"
                type="tel"
                placeholder="Enter Mobile Number"
                maxLength={10}
                onChange={(e) => {
                  handleChange(e);
                }}
              ></input>
              <small>Enter the same number used on Man Matters</small>
              <button
                className={`${active ? "active" : ""}`}
                onClick={() => {
                  active && handleSubmit();
                }}
              >
                {" "}
                Wow! Get my Paytm Gift Card{" "}
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </main>
          )}
          <div className="footer">
            Powered by <img src="./images/gokwiklogo.jpeg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
