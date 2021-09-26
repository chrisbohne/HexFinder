import './Tile.css';
import {useContext} from 'react';
import { PlaygroundContext } from '../../Contexts/Playground';

function Tile(props) {
  const {setSelectedTile} = useContext(PlaygroundContext)
  const view = `-50 ${props.tile.height - 260 } 300 300`

  return (
    <div onClick={() => setSelectedTile(props.tile)} className="tile">
      <svg viewBox={view}>{props.tile.svg}</svg>
    </div>
  );
}

export default Tile;
