import React from "react";
import { useState } from "react";
import Weather from "./Weather";
import "./cityInput.css";

const CityInput = () => {
  const [toggle, setToggle] = useState(false);
  const [city, setCity] = useState("");

  const handleClick = () => {
    setToggle(true);
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      {toggle ? (
        <Weather city={city} />
      ) : (
        <div className="container">
          <h1>Weather App</h1>

          <div className="section">
            <div className="box">
              <div className="header">
                <small>Live Weather</small>
              </div>

              <div className="main_content">
                <h2>World Weather Report</h2>
                <p>
                  Users openweathermap API provides live weather report based on
                  thi city you provide
                </p>

                <div className="input_button">
                  <h4>City Name:</h4>
                  <input
                    type="text"
                    placeholder="city name"
                    onChange={handleChange}
                  />
                  <button onClick={handleClick}>submit</button>
                </div>
              </div>

              <div className="footer">
                <small>Designed by Anton Francis jeejo</small>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CityInput;
