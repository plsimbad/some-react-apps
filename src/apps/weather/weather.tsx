import {
  faCloud,
  faCloudMoon,
  faCloudSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";

export default class Weather extends React.Component {
  state = { weather: [], curWeather: {} };
  now = new Date();
  nowString = `${this.now.getFullYear()}-${
    this.now.getMonth() + 1
  }-${this.now.getDate()}`;
  tomorrowString = `${this.now.getFullYear()}-${this.now.getMonth() + 1}-${
    this.now.getDate() + 1
  }`;

  icons = {
    cloudy: faCloud,
    "partly-cloudy-night": faCloudMoon,
    "partly-cloudy-day": faCloudSun,
  };

  componentDidMount() {
    axios
      .all([
        axios.get(
          `https://api.brightsky.dev/weather?lat=49.460983&lon=11.061859&date=${this.nowString}`
        ),
        axios.get(
          `https://api.brightsky.dev/weather?lat=49.460983&lon=11.061859&date=${this.tomorrowString}`
        ),
      ])
      .then(
        axios.spread((...res) => {
          const weatherMapped = [
            ...res[0].data.weather.slice(this.now.getHours()),
            ...res[1].data.weather,
          ];

          console.log(weatherMapped);

          this.setState({
            weather: weatherMapped,
          });
        })
      );
  }

  render() {
    return (
      <>
        <div className="mb-10 text-left text-5xl">Weather for Nuremberg</div>
        <div>
          {this.state.weather[0] && (
            <div className="mb-6 text-left">
              <div className="text-bold text-8xl">
                {Math.ceil(this.state.weather[0].temperature) + "°"}
              </div>
              <div className="">{this.state.weather[0].icon}</div>
            </div>
          )}
        </div>
        <div className="card w-full overflow-x-auto rounded bg-white bg-opacity-30 shadow-lg">
          <div className="flex space-x-3 p-3">
            {this.state.weather.map((w, i) => {
              return (
                <div className="" key={i}>
                  <span>{i === 0 ? "now" : w.timestamp.slice(11, 16)}</span>
                  <br />
                  <span>{Math.ceil(w.temperature) + "°"} </span>
                  <br />
                  <span className="text-sm italic">
                    <FontAwesomeIcon icon={this.icons[w.icon]} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
