import './TileSelect.css';

function TileSelect(props) {
  return (
    <div onClick={() => props.openMenu(props.category[0])} className="tile-select">
      <h2>{props.category[0]}</h2>
    </div>
  );
}

export default TileSelect;
