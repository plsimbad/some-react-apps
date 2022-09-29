import axios from "axios";
import { useEffect, useState } from "react";
import { WeatherDetails } from "./weather-details";
import { WeatherForcast } from "./weather-forcast";

export const Weather = () => {
  const [state, setState] = useState({ weather: [] });
  const [loading, setLoading] = useState(false);
  const now = new Date();
  const nowString = `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()}`;
  const tomorrowString = `${now.getFullYear()}-${now.getMonth() + 1}-${
    now.getDate() + 1
  }`;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    axios
      .all([
        axios.get(
          `https://api.brightsky.dev/weather?lat=49.51&lon=11.28&date=${nowString}`
        ),
        axios.get(
          `https://api.brightsky.dev/weather?lat=49.51&lon=11.28&date=${tomorrowString}`
        ),
      ])
      .then(
        axios.spread((...res) => {
          const weatherMapped = [
            ...res[0].data.weather.slice(now.getHours()),
            ...res[1].data.weather,
          ];

          setState({
            weather: weatherMapped,
          });

          setLoading(false);
        })
      );
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="mx-auto w-3/4">
          <div className="mb-10 text-left text-5xl">
            Weather for Lauf an der Pegnitz
          </div>
          <div>
            {state.weather[0] && (
              <div className="mb-6 text-left">
                <div className="text-bold text-8xl">
                  {Math.ceil(state.weather[0].temperature) + "°"}
                </div>
                <div className="">{state.weather[0].icon}</div>
              </div>
            )}
          </div>
          <WeatherForcast weather={state.weather} />
          <WeatherDetails weather={state.weather[0]} />
        </div>
      )}
    </>
  );
};
