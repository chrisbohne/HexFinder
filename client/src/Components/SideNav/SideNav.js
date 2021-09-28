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

  const streetSymbol ={
    svg: <g>
    <path d="M150 0L200 43.3013L150 86.6026H50L0 43.3013L50 0H150Z" fill="#ECF0F1"/>
    <path d="M164.5 73.952L14.5 30.6507V28.65L39.5 7L189.5 50.5V52.3013L164.5 73.952Z" fill="#2C3E50"/>
    <path d="M50 86.6026L0 43.3013V93.3L50 136.6H150L200 93.3V43.3013L150 86.6026H50Z" fill="#BDC3C7"/>
    <path d="M164.5 71.952L14.5 28.6507L39.5 7L189.5 50.3013L164.5 71.952Z" fill="#34495E"/>
  </g>,
    height: 138
  }

  const railSymbol ={
    svg: <g>
    <path d="M150 0L200 43.3013L150 86.6026H50L0 43.3013L50 0H150Z" fill="#ECF0F1"/>
    <path d="M50 86.6026L0 43.3013V93.3L50 136.6H150L200 93.3V43.3013L150 86.6026H50Z" fill="#BDC3C7"/>
    <path d="M185.559 54V55.8013L179.309 61.214L29.3496 17.8778L29.2998 15.9208L35.5594 10.5L185.559 54Z" fill="#2C3E50"/>
    <path d="M185.56 53.8013L35.5596 10.5L29.3096 15.9127L179.31 59.214L185.56 53.8013Z" fill="#34495E"/>
    <path d="M169.5 69.714L19.5 26.4127V24.412L25.731 19.016L175.75 62.262V64.3013L169.5 69.714Z" fill="#2C3E50"/>
    <path d="M169.5 67.714L19.5 24.4127L25.75 19L175.75 62.3013L169.5 67.714Z" fill="#34495E"/>
  </g>,
    height: 137
  }

  const natureSymbol ={
    svg: <g>
    <path d="M200 157.801L150 201.103L100 0L200 157.801Z" fill="#2C3E50"/>
    <path d="M100 0L112.059 48.5V28.5L122.18 35L100 0Z" fill="#9B968E"/>
    <path d="M150 201.103H50L100 0L150 201.103Z" fill="#34495E"/>
    <path d="M100 0L88 48.2646L103 37.5L112 48.2646L100 0Z" fill="#BDC3C7"/>
    <path d="M50 201.103L0 157.801L100 0L50 201.103Z" fill="#405870"/>
    <path d="M76.5527 37L99.9999 0L87.9414 48.5L86.4999 30L76.5527 37Z" fill="#ECF0F1"/>
    <path d="M50 200.603L0 157.301V207.3L50 250.6H150L200 207.3V157.301L150 200.603H50Z" fill="#BDC3C7"/>
  </g>,
    height: 251
  }

  const citySymbol = {
    svg: <g>
    <path d="M150 76L200 119.301L150 162.603H50L0 119.301L50 76H150Z" fill="#ECF0F1"/>
    <path d="M50 162.603L0 119.301V169.3L50 212.6H150L200 169.3V119.301L150 162.603H50Z" fill="#BDC3C7"/>
    <path d="M49.7554 123.228L99.7798 152.11L99.7797 78.3012L49.7554 49.4196L49.7554 123.228Z" fill="#34495E"/>
    <path d="M99.7334 152.11L149.758 123.228L149.758 49.4196L99.7334 78.3012L99.7334 152.11Z" fill="#2C3E50"/>
    <rect width="64.1813" height="64.1813" transform="matrix(0.866025 0.5 -0.866025 0.5 99.8232 -3.05176e-05)" fill="#ECF0F1"/>
    <path d="M155.393 46.2105L99.8108 78.3011L44.2282 46.2105L44.2282 32.0906L99.8108 64.1813L155.393 32.0906L155.393 46.2105Z" fill="#BDC3C7"/>
    <rect x="83.3909" y="113.601" width="5.77632" height="34.6579" rx="2.88816" fill="#2C3E50"/>
    <rect x="67.3455" y="107.183" width="5.77632" height="34.6579" rx="2.88816" fill="#2C3E50"/>
    <rect x="53.8674" y="98.8392" width="5.77632" height="34.6579" rx="2.88816" fill="#2C3E50"/>
    <rect width="44.725" height="14.0256" transform="matrix(0.866025 0.5 -0.866025 0.5 55.2681 84.0775)" fill="#ECF0F1"/>
    <path d="M81.8545 126.289L94.001 119.276L94.001 106.541L81.8545 113.408L43.1215 91.1374L43.1215 103.927L81.8545 126.289Z" fill="#BDC3C7"/>
    <path d="M55.1511 63.8842C55.1511 60.8581 57.2756 59.6315 59.8963 61.1446V61.1446C62.5169 62.6576 64.6414 66.3373 64.6414 69.3634L64.6414 82.2787L55.1511 76.7995L55.1511 63.8842Z" fill="#ECF0F1"/>
    <path d="M142.943 64.526C142.943 61.4999 140.818 60.2733 138.197 61.7864V61.7864C135.577 63.2994 133.452 66.9791 133.452 70.0052L133.452 82.9205L142.943 77.4413L142.943 64.526Z" fill="#ECF0F1"/>
    <path d="M142.943 90.1985C142.943 87.1724 140.818 85.9459 138.197 87.4589V87.4589C135.577 88.972 133.452 92.6516 133.452 95.6777L133.452 108.593L142.943 103.114L142.943 90.1985Z" fill="#ECF0F1"/>
    <path d="M68.6292 70.9441C68.6292 67.918 70.7536 66.6915 73.3743 68.2045V68.2045C75.995 69.7176 78.1194 73.3973 78.1194 76.4233L78.1194 89.3386L68.6291 83.8594L68.6292 70.9441Z" fill="#ECF0F1"/>
    <path d="M129.464 71.5859C129.464 68.5598 127.34 67.3333 124.719 68.8463V68.8463C122.099 70.3594 119.974 74.0391 119.974 77.0652L119.974 89.9805L129.464 84.5012L129.464 71.5859Z" fill="#ECF0F1"/>
    <path d="M129.464 97.2584C129.464 94.2323 127.34 93.0058 124.719 94.5188V94.5188C122.099 96.0319 119.974 99.7116 119.974 102.738L119.974 115.653L129.464 110.174L129.464 97.2584Z" fill="#ECF0F1"/>
    <path d="M82.1072 78.0041C82.1072 74.978 84.2317 73.7514 86.8523 75.2645V75.2645C89.473 76.7775 91.5975 80.4572 91.5975 83.4833L91.5975 96.3986L82.1072 90.9194L82.1072 78.0041Z" fill="#ECF0F1"/>
    <path d="M115.986 78.6459C115.986 75.6198 113.862 74.3932 111.241 75.9063V75.9063C108.621 77.4193 106.496 81.099 106.496 84.1251L106.496 97.0404L115.986 91.5612L115.986 78.6459Z" fill="#ECF0F1"/>
    <path d="M115.986 104.318C115.986 101.292 113.862 100.066 111.241 101.579V101.579C108.621 103.092 106.496 106.772 106.496 109.798L106.496 122.713L115.986 117.234L115.986 104.318Z" fill="#ECF0F1"/>
    <path d="M80.0835 57.7632C80.0835 63.2574 74.6709 66.6075 69.9128 63.8604C65.1547 61.1133 60.2856 53.9511 60.2856 48.4569C60.2856 42.9627 66.7101 40.094 71.4682 42.8411C76.2263 45.5882 80.0835 52.269 80.0835 57.7632Z" fill="#2C3E50"/>
    <circle r="9.9481" transform="matrix(0.866025 0.5 -2.20305e-08 1 68.901 54.0727)" fill="#34495E"/>
    <line x1="68.3455" y1="46.2105" x2="68.3455" y2="53.9123" stroke="#2C3E50" strokeWidth="2"/>
    <line x1="68.0526" y1="53.2052" x2="71.6832" y2="56.8358" stroke="#2C3E50" strokeWidth="2"/>
  </g>,
  height: 213
  }

  const tileSelects = Object.entries(tileObj).map((category) => {
    let symbol;
    if (category[0] === 'nature') symbol = natureSymbol;
    if (category[0] === 'street') symbol = streetSymbol;
    if (category[0] === 'rail') symbol = railSymbol;
    if (category[0] === 'city') symbol = citySymbol;
    return <TileSelect category={category[0]} openMenu={openMenu} symbol={symbol} />
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
      <div onClick={()=> setSelectedTile({name: '', svg: '', category: ''})} id="erase">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-eraser-fill" viewBox="0 0 16 16">
        <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
      </svg>
      </div>
      </div>
    </div>
  );
}

export default SideNav;