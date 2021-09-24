import './GridElement.css';
import {useState, useContext} from 'react'
import {PlaygroundContext} from '../../Contexts/Playground'
import {storeInGraph, createGridElement} from '../../helpers/graphHelper'


function GridElement(props) {
  const [element, setElement] = useState('')
  // const [prevElement, setPrevElement] = useState('')
  // const [isClicked, setIsClicked] = useState(false)
  const {selectedTile, map} = useContext(PlaygroundContext)

  function addTile() {
    // setIsClicked(true)
    if (element && selectedTile.svg === '') {
      setElement('')
    }
    else {
      setElement(<svg x={props.x} y={props.y}>{selectedTile.svg}</svg>)
    }
    storeInGraph(map, props.x, props.y, selectedTile)
    console.log(map)


  }

  // function previewTile() {
  //   setPrevElement(element)
  //   setElement(<svg x={props.x} y={props.y}>{selectedTile.paint}</svg>)
  // }

  // function removePreview(evt) {
  //   if (!isClicked) {
  //     setElement(prevElement)
  //   }
  // }

  return (
    <svg onClick={()=>addTile()} /*onMouseEnter={()=> previewTile()} onMouseLeave={(evt) => removePreview(evt)}*/ className="grid-element">
      <polygon transform={props.transform} points={createGridElement()} />
      {/* <circle r="50" /> */}
      {element}
    </svg>
  );
}

export default GridElement;

