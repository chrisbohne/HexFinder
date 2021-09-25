import './GridElement.css';
import {useState, useContext, useEffect} from 'react'
import {PlaygroundContext} from '../../Contexts/Playground'
import {storeInGraph, createGridElement} from '../../helpers/graphHelper'
import actionTiles from '../../assets/tiles/actionTiles';


function GridElement(props) {
  const [element, setElement] = useState('')
  const {selectedTile, map, setDataToStore, dataToStore} = useContext(PlaygroundContext)

  useEffect(() => {
    if (props.existingElement) {
      const svg = actionTiles[props.existingElement.name]
      console.log(svg)
      setElement(<svg x={props.x} y={props.y}>{svg.svg}</svg>)
    }
  },[])

  function addTile() {
    if (element && selectedTile.svg === '') {
      setElement('')
    }
    else {
      setElement(<svg x={props.x} y={props.y}>{selectedTile.svg}</svg>)
    }
    storeInGraph(map, props.x, props.y, selectedTile)
    const storeData = {name: selectedTile.name, x: props.x, y: props.y, category: selectedTile.category}
    const newArr = [...dataToStore, storeData]
    setDataToStore(newArr)
  }

   return (
    <svg onClick={()=>addTile()}  className="grid-element">
      <polygon transform={props.transform} points={createGridElement()} />
      {element}
    </svg>
  );
}

export default GridElement;

