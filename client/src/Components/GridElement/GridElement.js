import './GridElement.css';
import {useState, useContext, useEffect} from 'react'
import {PlaygroundContext} from '../../Contexts/Playground'
import {storeInGraph, createGridElement} from '../../helpers/graphHelper'
import cityTiles from '../../assets/tiles/cityTiles';
import streetTiles from '../../assets/tiles/streetTiles';
import railTiles from '../../assets/tiles/railTiles';
import natureTiles from '../../assets/tiles/natureTiles';


function GridElement(props) {
  const [element, setElement] = useState('')
  const {selectedTile, map, loadedData, dataArr, setDataArr, setLocations, locations} = useContext(PlaygroundContext)

  useEffect(() => {
    // only for loading data
    if (props.existingElement) {
      let tiles;
      const categ = props.existingElement.category
      if (categ === 'city') tiles = cityTiles;
      if (categ === 'street') tiles = streetTiles;
      if (categ === 'rail') tiles = railTiles;
      if (categ === 'nature') tiles = natureTiles;
      const tileForGraph = {name: props.existingElement.name, x: props.x, y: props.y, connections: props.existingElement.connections, category: props.existingElement.category}
      const svg = tiles[props.existingElement.name]
      setElement(<svg x={props.x - 100} y={props.y -94 + 136.6 -svg.height}>{svg.svg}</svg>)
      storeInGraph(map, tileForGraph)
      // console.log(map)
    }
  },[props.existingElement, props.x,props.y, map, loadedData])

  function removeFromDataArr () {
    const index = dataArr.findIndex((el) => {
      return el.x === props.x && el.y === props.y
    })

    if (index >= 0) {
      const newArr = [...dataArr]
      newArr.splice(index, 1)
      setDataArr(newArr)
    }
  }

  function replaceInDataArr (el) {
    const index = dataArr.findIndex((el) => {
      return el.x === props.x && el.y === props.y
    })

    if (index >= 0) {
      const newArr = [...dataArr]
      newArr.splice(index, 1, el)
      setDataArr(newArr)
    }
  }

  function storeInDataArr (el) {
    const newArr = [...dataArr]
    newArr.push(el)
    setDataArr(newArr)
  }

  function addTile() {
    const tileToStore = {name: selectedTile.name, x: props.x, y: props.y, connections: selectedTile.connections, category: selectedTile.category}
    if (element && selectedTile.svg === '') {
      setElement('')
      removeFromDataArr();
    }
    else if (element && selectedTile.svg) {
      setElement(<svg x={props.x - 100} y={props.y -94 + 136.6 - selectedTile.height}>{selectedTile.svg}</svg>)
      replaceInDataArr(tileToStore);
    }
    else if(selectedTile.svg) {
      setElement(<svg x={props.x - 100} y={props.y -94 + 136.6 - selectedTile.height}>{selectedTile.svg}</svg>)
      storeInDataArr(tileToStore)
      if (selectedTile.category === "city") {
        const newLocations = [...locations]
        newLocations.push({x: props.x, y: props.y, name: selectedTile.name})
        setLocations(newLocations)
      }
    }
  }


  // function addTile() {
  //   const tileForGraph = {name: selectedTile.name, x: props.x, y: props.y, connections: selectedTile.connections, category: selectedTile.category}
  //   if (element && selectedTile.svg === '') {
  //     setElement('')
  //     removeFromGraph(map, tileForGraph);
  //     console.log(map)
  //   }
  //   else if (element && selectedTile.svg) {
  //     setElement(<svg x={props.x - 100} y={props.y -94 + 136.6 - selectedTile.height}>{selectedTile.svg}</svg>)
  //     replaceInGraph(map, tileForGraph);
  //     console.log(map)
  //   }
  //   else if(selectedTile.svg) {
  //     setElement(<svg x={props.x - 100} y={props.y -94 + 136.6 - selectedTile.height}>{selectedTile.svg}</svg>)
  //     storeInGraph(map,tileForGraph)
  //     console.log(map)
  //   }
  // }

   return (
    <svg onClick={()=>addTile()}  className="grid-element">
      <polygon transform={props.transform} points={createGridElement()} />
      {element}
    </svg>
  );
}

export default GridElement;

