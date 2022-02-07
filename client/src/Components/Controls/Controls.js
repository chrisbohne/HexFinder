import './Controls.css';

import { PlaygroundContext } from '../../Contexts/Playground';
import { storeInGraph } from '../../helpers/graphHelper';
import {dijkstraSearch} from '../../helpers/pathfinding'
import {useContext, useEffect, useState} from 'react'
import {Layout, Point, pixelToHex, flatLayout, hexRound} from '../../helpers/hexLogic'
import Graph from '../../helpers/graph';

function Controls() {

  const {map, setMap, dataArr, streetWeight, railWeight, flightWeight, startLocation, targetLocation, setPathArr, locations} = useContext(PlaygroundContext)

  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    if (isClicked) {
      search()
    }
  },[locations, streetWeight, flightWeight, railWeight] )

  function search () {
    // create Graph from dataArr
    setIsClicked(true)
    for (let tile of dataArr) {
      let weight;
      if (tile.category === 'street') weight = streetWeight
      if (tile.category === 'rail') weight = railWeight
      if (tile.category === 'city') weight = flightWeight
      setMap(new Graph())
      storeInGraph(map, tile, weight)
    }
    // Start the Search
    const flat = Layout(flatLayout, Point(100,50), Point(0,0))
    const start = hexRound(pixelToHex(flat,Point(JSON.parse(startLocation).x,(JSON.parse(startLocation).y))))
    const target = hexRound(pixelToHex(flat, Point(JSON.parse(targetLocation).x,(JSON.parse(targetLocation).y))))
    const path =dijkstraSearch(map, `${start.x},${start.y},${start.z}`, `${target.x},${target.y},${target.z}`)
    const tiles = path.path.map((el) => (map.storage.get(el)))
    const coordArr = tiles.map((el) => ({x: el.tile.x, y: el.tile.y}))
    // coordArr.pop()
    // coordArr.shift()
    setPathArr(coordArr)
  }

  function stop() {
    setPathArr([])
  }

  return (
    <div className="controls">
      <svg onClick={search} className="playground-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" rx="4" fill="#2C3E50"/>
        <path d="M15.75 8.89861C16.4167 9.28351 16.4167 10.2458 15.75 10.6307L7.5 15.3938C6.83333 15.7787 6 15.2976 6 14.5278V5.00149C6 4.23169 6.83333 3.75057 7.5 4.13547L15.75 8.89861Z" fill="#ECF0F1"/>
      </svg>
      <svg onClick={stop} className="playground-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" rx="4" fill="#2C3E50"/>
        <rect x="5" y="5" width="10.25" height="10.25" rx="1" fill="#ECF0F1"/>
      </svg>

    </div>
  );
}

export default Controls;
