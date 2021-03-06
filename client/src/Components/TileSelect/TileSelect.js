import './TileSelect.css';

function TileSelect(props) {
  const view = `-50 ${props.symbol.height - 260 } 300 300`

  return (
    <div onClick={() => props.openMenu(props.category)} className="tile-select">
      <svg viewBox={view} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* <path d="M150 0L200 43.3013L150 86.6026H50L0 43.3013L50 0H150Z" fill="#ECF0F1"/>
        <path d="M164.5 73.952L14.5 30.6507V28.65L39.5 7L189.5 50.5V52.3013L164.5 73.952Z" fill="#2C3E50"/>
        <path d="M50 86.6026L0 43.3013V93.3L50 136.6H150L200 93.3V43.3013L150 86.6026H50Z" fill="#BDC3C7"/>
        <path d="M164.5 71.952L14.5 28.6507L39.5 7L189.5 50.3013L164.5 71.952Z" fill="#34495E"/> */}
        {props.symbol.svg}
      </svg>

    </div>
  );
}

export default TileSelect;
