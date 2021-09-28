import {Hex, hexNeighbor, Layout, flatLayout, Point, pixelToHex, hexRound, hexCorners, hexDistance} from './hexLogic'

const flat = Layout(flatLayout, Point(100,50), Point(0,0))

export function createGridElement () {
  const originHex = Hex(0,0,0)
  const corners = hexCorners(flat, originHex)
  const cornerStringArr = corners.map((corner) => {
    return `${Math.round(corner.x * 10) / 10}, ${Math.round(corner.y * 10) / 10}`
  })
  return cornerStringArr.join(' ')
}

// check if neighbor and current have some connection
// function checkConnection (direction, connectionArr) {
//   if (connectionArr.some(el => Math.abs(direction - el) === 3)) return true
//   return false
// }

function checkConnection (neighborDirection, neighbor, tile) {
  if (tile.railConnections && neighbor.railConnections) {
    if (tile.railConnections.includes(neighborDirection)) {
      return neighbor.railConnections.some(el => Math.abs(neighborDirection - el) === 3)
    }
  } else if (tile.streetConnections && neighbor.streetConnections) {
    if (tile.streetConnections.includes(neighborDirection)) {
      return neighbor.streetConnections.some(el => Math.abs(neighborDirection - el) === 3)
    }
  }
  else return false
}


// get all neighbors and get their node
function getNeighbors(graph, hex) {
  const neighborTiles = []
  for (let i = 0; i < 6; i++) {
    const neighborHex = hexNeighbor(hex, i)
    const searchKey = `${neighborHex.x},${neighborHex.y},${neighborHex.z}`
    const node = graph.storage.get(searchKey)
    node && neighborTiles.push({node, direction: i})
  }
  return neighborTiles
}

// add tile in graph and add edges for connected tiles
// export function storeInGraph (graph, tile) {
//   const {category, connections, x, y} = tile
//   const hex = hexRound(pixelToHex(flat, Point(x, y)))
//   const hexString = `${hex.x},${hex.y},${hex.z}`
//   graph.addVertex(hexString, tile)
//   const neighbors = getNeighbors(graph, hex)
//   for (const neighbor of neighbors) {
//     if (neighbor.node.tile.category === category && connections) {
//       if (checkConnection(neighbor.direction, connections)) {
//         graph.addEdge(hexString, neighbor.node.value, 5)
//       }
//     }
//   }
// }

export function storeInGraph (graph, tile, weight) {
    const {x, y} = tile
    const hex = hexRound(pixelToHex(flat, Point(x, y)))
    const hexString = `${hex.x},${hex.y},${hex.z}`
    const airports = [];
    if(tile.name === 'citySVG') {
      graph.storage.forEach(el => {
        if (el.tile.name === 'citySVG') airports.push(el.value)
      })
    }
    graph.addVertex(hexString, tile)
    if(airports.length) {
      let airportHex = airports[0].split(',')
      airportHex = {x: airportHex[0], y: airportHex[1], z: airportHex[2]}
      const distance = hexDistance(hex, airportHex)
      console.log(distance)
      graph.addEdge(hexString, airports[0], weight * distance)
    }
    const neighbors = getNeighbors(graph, hex)


    for (const neighbor of neighbors) {
      const neighborTile = neighbor.node.tile
      if (checkConnection(neighbor.direction, neighborTile, tile)) {
      // if ((neighbor.node.tile.category === 'city' && connections) || (neighbor.node.tile.category === 'street' && connections)) {
      //   if (checkConnection(neighbor.direction, neighbor.node.tile.connections)) {
          graph.addEdge(hexString, neighbor.node.value, weight)
        // }
      }
    }
}

// export function removeFromGraph (graph, tile) {
//   const hex = hexRound(pixelToHex(flat, Point(tile.x, tile.y)))
//   const hexString = `${hex.x},${hex.y},${hex.z}`
//   graph.removeVertex(hexString)
// }

// export function replaceInGraph (graph, tile) {
//  removeFromGraph(graph, tile)
//  storeInGraph(graph, tile)
// }


