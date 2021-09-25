import './GridElement.css';
import {useState, useContext, useEffect} from 'react'
import {PlaygroundContext} from '../../Contexts/Playground'
import {storeInGraph, createGridElement, removeFromGraph, replaceInGraph} from '../../helpers/graphHelper'
import cityTiles from '../../assets/tiles/cityTiles';
import streetTiles from '../../assets/tiles/streetTiles';
import railTiles from '../../assets/tiles/railTiles';
import natureTiles from '../../assets/tiles/natureTiles';


function GridElement(props) {
  const [element, setElement] = useState('')
  const {selectedTile, map, loadedData} = useContext(PlaygroundContext)

  useEffect(() => {
    if (props.existingElement) {
      let tiles;
      const categ = props.existingElement.category
      if (categ === 'city') tiles = cityTiles;
      if (categ === 'street') tiles = streetTiles;
      if (categ === 'rail') tiles = railTiles;
      if (categ === 'nature') tiles = natureTiles;
      const tileForGraph = {name: props.existingElement.name, x: props.x, y: props.y, connections: props.existingElement.connections, category: props.existingElement.category}
      const svg = tiles[props.existingElement.name]
      setElement(<svg x={props.x} y={props.y}>{svg.svg}</svg>)
      storeInGraph(map, tileForGraph)
      console.log(map)
    }
  },[props.existingElement, props.x,props.y, map, loadedData])


  function addTile() {
    const tileForGraph = {name: selectedTile.name, x: props.x, y: props.y, connections: selectedTile.connections, category: selectedTile.category}
    if (element && selectedTile.svg === '') {
      setElement('')
      removeFromGraph(map, tileForGraph);
      console.log(map)
    }
    else if (element && selectedTile.svg) {
      setElement(<svg x={props.x} y={props.y}>{selectedTile.svg}</svg>)
      replaceInGraph(map, tileForGraph);
      console.log(map)
    }
    else {
      setElement(<svg x={props.x - 100} y={props.y -94 + 136.6 - selectedTile.height}>{selectedTile.svg}</svg>)
      storeInGraph(map,tileForGraph)
      console.log(map)
    }
  }

   return (
    <svg onClick={()=>addTile()}  className="grid-element">
      <polygon transform={props.transform} points={createGridElement()} />
      {element}
    </svg>
  );
}

export default GridElement;

