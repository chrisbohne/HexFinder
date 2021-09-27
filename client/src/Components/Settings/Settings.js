import './Settings.css';
import {useContext} from 'react';
import { PlaygroundContext } from '../../Contexts/Playground';

function Settings() {


  const {
    setStreetWeight,
    streetWeight,
    setRailWeight,
    railWeight,
    setFlightWeight,
    flightWeight,
    locations,
    setStartLocation,
    setTargetLocation,
    targetLocation,
    startLocation
  } = useContext(PlaygroundContext)

  return (
    <div className="settings">
      <label htmlFor="streetInput">
        Streets
        <input onChange={(e) => setStreetWeight(e.target.value)}
            value={streetWeight}
            id="streetInput" type="range" min="1" max="10">
        </input>
      </label>
      <label htmlFor="railsInput">
        Rails
        <input onChange={(e) => setRailWeight(e.target.value)}
            value={railWeight} id="railInput" type="range" min="1" max="10">
        </input>
      </label>
      <label htmlFor="flightsInput">
        Flights
        <input onChange={(e) => setFlightWeight(e.target.value)}
            value={flightWeight} id="flightsInput" type="range" min="1" max="10">
        </input>
      </label>
      <label htmlFor="selectStart">
        Start Location
        <select  id="selectStart">
          <option value=""></option>
           {locations.map((location) => (
              <option value={location.name} key={location.name}>
                {location.name}
              </option>
            ))}
        </select>
      </label>
      <label htmlFor="selectTarget">
        Target Location
        <select  id="selectTarget">
          <option value=""></option>
           {locations.map((location) => (
              <option value={location.name} key={location.name}>
                {location.name}
              </option>
            ))}
        </select>
      </label>
    </div>
  );
}

export default Settings;
