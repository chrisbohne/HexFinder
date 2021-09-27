import './Controls.css';

import { PlaygroundContext } from '../../Contexts/Playground';
import { storeInGraph } from '../../helpers/graphHelper';
import {dijkstraSearch} from '../../helpers/pathfinding'
import {useContext} from 'react'

function Controls() {

  const {map, dataArr, streetWeight, railWeight, flightWeight} = useContext(PlaygroundContext)

  function search () {
    // create Graph from dataArr
    for (let tile of dataArr) {
      let weight;
      if (tile.category === 'street') weight = streetWeight
      if (tile.category === 'rail') weight = railWeight
      if (tile.category === 'city') weight = flightWeight
      storeInGraph(map, tile, weight)
    }

    // Start the Search
  }

  return (
    <div className="controls">
      <svg onClick={search} className="playground-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" rx="4" fill="#2C3E50"/>
        <path d="M15.75 8.89861C16.4167 9.28351 16.4167 10.2458 15.75 10.6307L7.5 15.3938C6.83333 15.7787 6 15.2976 6 14.5278V5.00149C6 4.23169 6.83333 3.75057 7.5 4.13547L15.75 8.89861Z" fill="#ECF0F1"/>
      </svg>
    </div>
  );
}

export default Controls;
