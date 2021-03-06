import './GridElement.css';
import {useState, useContext} from 'react'
import {PlaygroundContext} from '../../Contexts/Playground'
import {createGridElement} from '../../helpers/graphHelper'



function GridElement(props) {
  const [element, setElement] = useState('')
  const {selectedTile, dataArr, setDataArr, setLocations, locations, setStartLocation} = useContext(PlaygroundContext)

  // useEffect(() => {
  //   // only for loading data
  //   setLocations([])
  //   setDataArr([])
  //   if (props.existingElement) {
  //     let tiles;
  //     const categ = props.existingElement.category
  //     if (categ === 'city') tiles = cityTiles;
  //     if (categ === 'street') tiles = streetTiles;
  //     if (categ === 'rail') tiles = railTiles;
  //     if (categ === 'nature') tiles = natureTiles;
  //     const svg = tiles[props.existingElement.name]
  //     setElement(<svg x={props.x - 100} y={props.y -94 + 136.6 -svg.height}>{svg.svg}</svg>)
  //     const tileToStore = {name: props.existingElement.name, x: props.x, y: props.y, streetConnections: props.existingElement.streetConnections, railConnections: props.existingElement.railConnections, category: props.existingElement.category}
  //     storeInDataArr(tileToStore)
  //     if (categ === "city") {
  //       console.log(locations, 'before')
  //       const newLocations = [...locations]
  //       newLocations.push({x: props.x, y: props.y, name: props.existingElement.name})
  //       setLocations(newLocations)
  //       console.log(locations, 'after')
  //     }
  //   }
  // },[props.existingElement, props.x,props.y, loadedData])


  function removeFromDataArr () {
    const index = dataArr.findIndex((el) => {
      return el.x === props.x && el.y === props.y
    })
    console.log(index)

    if (index >= 0) {
      const newArr = [...dataArr]
      newArr.splice(index, 1)
      setDataArr(newArr)

      const locationsCopy = [...locations]
      const locationIndex = locationsCopy.findIndex((loc) => {
      return loc.x === props.x && loc.y === props.y
      })

      if (locationIndex >= 0) {
        locationsCopy.splice(locationIndex, 1)
        setLocations(locationsCopy)
      }
      setStartLocation([])
    }


  }

  function replaceInDataArr (el) {
    let isCity = false;
    const index = dataArr.findIndex((el) => {
      const isSame = el.x === props.x && el.y === props.y
      if (isSame) {
        if (el.category === "city") isCity = true
      }
      return isSame
    })

    if (index >= 0) {
      const newArr = [...dataArr]
      newArr.splice(index, 1, el)
      setDataArr(newArr)
    }

    if (isCity) {
      console.log('city')
      const newLocation = {x: el.x, y: el.y, name: el.name}
      const locationsCopy = [...locations]
      const locationIndex = locationsCopy.findIndex((loc) => {
        return loc.x === el.x && loc.y === el.y
      })

      if (el.category === 'city') {
        locationsCopy.splice(locationIndex, 1, newLocation)
        setLocations(locationsCopy)
      }
      else {
        locationsCopy.splice(locationIndex, 1)
        setLocations(locationsCopy)
      }
    }
  }

  function storeInDataArr (el) {
    const newArr = [...dataArr]
    newArr.push(el)
    setDataArr(newArr)
  }

  function addTile() {
    const tileToStore = {name: selectedTile.name, x: props.x, y: props.y, streetConnections: selectedTile.streetConnections, railConnections: selectedTile.railConnections, category: selectedTile.category}
    if (element && selectedTile.svg === '') {
      setElement('')
      removeFromDataArr();
    }
    else if (element && selectedTile.svg) {
      setElement(<svg x={props.x - 100} y={props.y -94 + 136.6 - selectedTile.height}>{selectedTile.svg}</svg>)
      replaceInDataArr(tileToStore);
      if (selectedTile.category === "city") {

      }
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

  return (
    <svg onClick={()=>addTile()}  className="grid-element">
      <polygon transform={props.transform} points={createGridElement()} />
      {element}
    </svg>
  );
}

export default GridElement;

