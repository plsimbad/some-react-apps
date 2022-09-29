import {
  faCloud,
  faCloudMoon,
  faCloudSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WeatherForcast = ({ weather }) => {
  const icons = {
    cloudy: faCloud,
    "partly-cloudy-night": faCloudMoon,
    "partly-cloudy-day": faCloudSun,
  };

  return (
    <div className="card hide-scrollbar w-full overflow-x-auto rounded bg-white bg-opacity-30 px-2 py-4 shadow-lg">
      <div className="flex space-x-5 p-3">
        {weather.map((w, i) => {
          return (
            <div className="" key={i}>
              <span>{i === 0 ? "now" : w.timestamp.slice(11, 16)}</span>
              <br />
              <span>{Math.ceil(w.temperature) + "°"} </span>
              <br />
              <span className="text-sm italic">
                <FontAwesomeIcon icon={icons[w.icon]} />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
