import './SideNav.css';
import TileSelect from '../TileSelect/TileSelect'
import TileModal from '../TileModal/TileModal'
import {useState, useContext} from 'react'
import { PlaygroundContext } from '../../Contexts/Playground';
import streetTiles from '../../assets/tiles/streetTiles'
import actionTiles from '../../assets/tiles/actionTiles'
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
    action: Object.keys(actionTiles).map((key) => {
      const obj = actionTiles[key];
      obj.name = key;
      return obj;
    }),
  }

  const tileSelects = Object.entries(tileObj).map((category) => {
    return <TileSelect category={category} openMenu={openMenu} />
  })

  return (
    <div className="side-nav">
      {tileFamily && <TileModal openMenu={openMenu} family={tileObj[tileFamily]}/>}
      {tileSelects}
      <div id="selected-tile">
        <svg viewBox="-50 -75 100 150">{props.selectedTile.svg}</svg>
      </div>
      <div onClick={()=> setSelectedTile({name: '', svg: '', category: '', connection: ''})} id="erase">
        <h4>Erase</h4>
      </div>
    </div>
  );
}

export default SideNav;