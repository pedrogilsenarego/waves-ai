"use client";

import { useEffect } from "react";
import { getWaveHeight } from "../utils/calculations";

const Page = () => {
  type WeatherReport = {
    waveHeight: number;
    wavePeriod: number;
    waveDirection: number;
    waterTemp: number;
    windDirection: number;
    airTemp: number;
    cloudCover: number;
    humidity: number;
    windSpeed: number;
  };

  const weatherReport: WeatherReport = {
    waveHeight: 2,
    wavePeriod: 7,
    waveDirection: 339,
    waterTemp: 13,
    windDirection: 358,
    airTemp: 20,
    cloudCover: 40,
    humidity: 70,
    windSpeed: 10,
  };

  interface Parameters {
    orientation: number;
    swellMultiplierCoefficient: number; // specific to each beach
  }
  const parameters = {
    orientation: 50,
    impediment: 0.2,
  };

  const lat = 38.82;
  const lng = -9.48;
  const params = [
    "waveHeight",
    "wavePeriod",
    "waterTemperature",
    "windDirection",
    "airTemperature",
    "cloudCover",
    "humidity",
    "windSpeed",
  ].join(",");

  useEffect(() => {
    fetch(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
      {
        headers: {
          // Get your key by signing up.
          Authorization:
            "74eae65e-41c5-11ee-92e6-0242ac130002-74eae6ea-41c5-11ee-92e6-0242ac130002",
        },
      }
    )
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <span> Praia grande:</span>
      <div className="flex flex-col mt-3">
        <span>Surf Prediction: </span>
        <span>
          Size prediction:{" "}
          {getWaveHeight(
            parameters.impediment,
            weatherReport.waveHeight,
            weatherReport.waveDirection,
            parameters.orientation
          )}{" "}
        </span>
      </div>
    </div>
  );
};

export default Page;
