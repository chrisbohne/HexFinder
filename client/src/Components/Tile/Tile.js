import './Tile.css';
import {useContext} from 'react';
import { PlaygroundContext } from '../../Contexts/Playground';

function Tile(props) {
  const {setSelectedTile} = useContext(PlaygroundContext)

  return (
    <div onClick={() => setSelectedTile(props.tile)} className="tile">
      {console.log(props)}
      <svg viewBox="-100 -100 200 200">{props.tile.svg}</svg>
    </div>
  );
}

export default Tile;
