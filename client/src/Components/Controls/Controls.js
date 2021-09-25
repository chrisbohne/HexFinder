import './Controls.css';

import { PlaygroundContext } from '../../Contexts/Playground';
import {dijkstraSearch} from '../../helpers/pathfinding'
import {useContext} from 'react'

function Controls() {

  const {map} = useContext(PlaygroundContext)

  function search () {
    const start = '0,0,0'
    const end = '0,-2,2'
    console.log(dijkstraSearch(map, start, end))
  }

  return (
    <div className="controls">
      <button onClick={search}>Play</button>
    </div>
  );
}

export default Controls;
