import './TileModal.css';
import Tile from '../Tile/Tile'

function TileModal(props) {

  const categoryTiles = props.family.map((tile) => {
    return <Tile tile={tile} />
  })

  return (
    <div className="tile-modal">
      <svg onClick={()=> props.openMenu('')} id="close-modal" width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4.34315" y="14.2426" width="14" height="2" rx="1" transform="rotate(-45 4.34315 14.2426)" fill="#ECF0F1"/>
        <rect x="14.2426" y="15.6569" width="14" height="2" rx="1" transform="rotate(-135 14.2426 15.6569)" fill="#ECF0F1"/>
      </svg>
      {categoryTiles}
    </div>
  );
}

export default TileModal;
