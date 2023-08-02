import React, { useState, useEffect } from "react";
import weather from "./weather.module.css";

const Weather = ({ city }) => {
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=60fae0d65eaceef1567962c2302b1451`;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(baseURL)
      .then((res) => {
        if (!res.ok) {
          throw Error(`could not fetch the data for that resource`);
        }

        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error ? (
        <div
          style={{
            margin: "10px",
          }}
        >
          {error}{" "}
          <h1
            style={{
              margin: "5px 0",
              textDecoration: "none",
            }}
          >
            Please refresh the page and enter correct city name
          </h1>
        </div>
      ) : (
        data && (
          <div className={weather.weather}>
            <div className={weather.weather__container}>
              <h1 className={weather.weather__h1}>
                The Weather is Currently haze{data.weather[0].description}
              </h1>
              <p>
                weather icon is {data.weather[0].icon}, The temperature in{" "}
                {data.name} {data.main.temp}degC
              </p>

              <div className={weather.weather__footer}>
                <small>Designed by Anton Frances Jeejo</small>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Weather;

