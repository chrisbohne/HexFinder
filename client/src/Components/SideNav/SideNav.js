import './SideNav.css';
import TileSelect from '../TileSelect/TileSelect'
import TileModal from '../TileModal/TileModal'
import {useState, useContext} from 'react'
import { PlaygroundContext } from '../../Contexts/Playground';
import streetTiles from '../../assets/tiles/streetTiles'
import cityTiles from '../../assets/tiles/cityTiles'
import natureTiles from '../../assets/tiles/natureTiles'
import railTiles from '../../assets/tiles/railTiles'

function SideNav(props) {
  const {setSelectedTile} = useContext(PlaygroundContext)
  const [tileFamily, setTileFamily] = useState('');

  function openMenu(family) {
    setTileFamily(family)
  }

  const tileObj = {
    nature: Object.keys(natureTiles).map((key) => {
      const obj = natureTiles[key];
      obj.name = key;
      return obj;
    }),
    street: Object.keys(streetTiles).map((key) => {
      const obj = streetTiles[key];
      obj.name = key;
      return obj;
    }),
    rail: Object.keys(railTiles).map((key) => {
      const obj = railTiles[key];
      obj.name = key;
      return obj;
    }),
    city: Object.keys(cityTiles).map((key) => {
      const obj = cityTiles[key];
      obj.name = key;
      return obj;
    }),
  }

  const tileSelects = Object.entries(tileObj).map((category) => {
    return <TileSelect category={category} openMenu={openMenu} />
  })

  const view = `-50 ${props.selectedTile.height - 260 } 300 300`

  return (
    <div className="side-nav">
      <div className="tile-selection">
      {tileFamily && <TileModal openMenu={openMenu} family={tileObj[tileFamily]}/>}
      {tileSelects}
      </div>
      <div>
      <div id="selected-tile">
        <svg viewBox={view}>{props.selectedTile.svg}</svg>
      </div>
      <div onClick={()=> setSelectedTile({name: '', svg: '', category: '', connection: ''})} id="erase">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-eraser-fill" viewBox="0 0 16 16">
        <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
      </svg>
      </div>
      </div>
    </div>
  );
}

export default SideNav;