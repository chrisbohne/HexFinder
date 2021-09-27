import {Hex, hexNeighbor, Layout, flatLayout, Point, pixelToHex, hexRound, hexCorners} from './hexLogic'

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
function checkConnection (direction, connectionArr) {
  if (connectionArr.some(el => Math.abs(direction - el) === 3)) return true
  return false
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
    const {category, connections, x, y} = tile
    const hex = hexRound(pixelToHex(flat, Point(x, y)))
    const hexString = `${hex.x},${hex.y},${hex.z}`
    graph.addVertex(hexString, tile)
    const neighbors = getNeighbors(graph, hex)
    for (const neighbor of neighbors) {
      if (neighbor.node.tile.category === category && connections) {
        if (checkConnection(neighbor.direction, connections)) {
          graph.addEdge(hexString, neighbor.node.value, weight)
        }
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


