import GridElement from "../Components/GridElement/GridElement"

const createGridElement = (x,y) => {
  const transform = `translate(${x}, ${y})`
  return <GridElement x={x} y={y} transform={transform} coord={{x,y}}/>
}

const createGrid = (rows, cols) => {
  const elementWidth = 200;
  const elementHeight = 86.6;
  const elementsArr = [];
  // loop must be like this because a grid element needs to overlap the left side, right side and top
  for (let i = -rows; i<= rows; i++) {
    for (let j = -cols; j<= cols; j+=2) {
      elementsArr.push(createGridElement(Math.round(j * 3/4 * elementWidth * 10)/10, Math.round(i * elementHeight * 10) /10))
    }
    for (let k = -cols+1; k<= cols; k+=2) {
      elementsArr.push(createGridElement(Math.round(k * 3/4 * elementWidth * 10) /10, Math.round((elementHeight/2 + i * elementHeight)*10) /10 ))
    }
  }
  return elementsArr
}
// const createGrid = (rows, cols) => {
//   const elementWidth = 200;
//   const elementHeight = 86.6;
//   const elementsArr = [];
//   for (let i = -rows; i<= rows; i++) {
//     for (let j = -cols; j<= cols; j++) {
//       if (j % 2 === 0) {
//         elementsArr.push(createGridElement(Math.round(j * 3/4 * elementWidth * 10)/10, Math.round(i * elementHeight * 10) /10))
//       } else {
//         elementsArr.push(createGridElement(Math.round(j * 3/4 * elementWidth * 10) /10, Math.round((elementHeight/2 + i * elementHeight)*10) /10 ))
//       }
//     }
//   }
//   return elementsArr
// }

export default createGrid