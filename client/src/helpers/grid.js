import GridElement from "../Components/GridElement/GridElement"

const createGridElement = (arr, x,y) => {
  // for loading an grid with existing data in arr
  let element
  if (arr.length) {
    element = arr.find(element => element.x === x && element.y === y)
  }
  const transform = `translate(${x}, ${y})`
  return <GridElement existingElement={element} x={x} y={y} transform={transform} coord={{x,y}}/>
}

export const createGrid = (rows, cols, arr) => {
  const elementWidth = 200;
  const elementHeight = 86.6;
  const elementsArr = [];
  // loop must be like this because a grid element needs to overlap the left side, right side and top
  for (let i = -rows; i<= rows; i++) {
    for (let j = -cols; j<= cols; j+=2) {
      elementsArr.push(createGridElement(arr, Math.round(j * 3/4 * elementWidth * 10)/10, Math.round(i * elementHeight * 10) /10))
    }
    for (let k = -cols+1; k<= cols; k+=2) {
      elementsArr.push(createGridElement(arr, Math.round(k * 3/4 * elementWidth * 10) /10, Math.round((elementHeight/2 + i * elementHeight)*10) /10 ))
    }
  }
  return elementsArr
}

export const showLocation = (x, y) => {
  const svg = <circle r="50" cx={x} cy={y} />
}


