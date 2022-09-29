import {
  faCloud,
  faSun,
  faTachometer,
  faUmbrella,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WeatherDetails = ({ weather }) => {
  return (
    <div className="card mt-5 w-full rounded bg-white bg-opacity-30 px-4 py-2 text-left shadow-lg">
      <div className="font-bold">Details</div>
      <div className="grid grid-cols-2">
        <div className="flex flex-row">
          <div className="flex w-11 items-center pr-3 text-sm font-thin">
            <FontAwesomeIcon icon={faUmbrella} />
          </div>
          <div className="flex-grow">{weather?.precipitation} mm/h</div>
        </div>
        <div className="flex">
          <span className="flex w-11 items-center pr-3 text-sm font-thin">
            <FontAwesomeIcon icon={faWind} />
          </span>
          <div className="flex-grow">{weather?.wind_speed} km/h</div>
        </div>
        <div className="flex">
          <span className="flex w-11 items-center pr-3 text-sm font-thin">
            <FontAwesomeIcon icon={faSun} />
          </span>
          <div className="flex-grow">{weather?.sunshine} h</div>
        </div>
        <div className="flex">
          <span className="flex w-11 items-center pr-3 text-sm font-thin">
            <FontAwesomeIcon icon={faCloud} />
          </span>
          <div className="flex-grow">{weather?.cloud_cover} %</div>
        </div>
        <div className="flex">
          <span className="flex w-11 items-center pr-3 text-sm font-thin">
            <FontAwesomeIcon icon={faTachometer} />
          </span>
          <div className="flex-grow">{weather?.pressure_msl} hPa</div>
        </div>
      </div>
    </div>
  );
};
