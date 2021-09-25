export function dijkstraSearch (graph, start, end) {
  // use object to keep track of distances
  let distances = {};
  distances[end] = Infinity;
  const adjacents = graph.storage.get(start).adjacents
  distances = Object.assign(distances, adjacents);
  // track paths using object
  const parents = {end: null};
  for (let child in adjacents) parents[child] = start;
  // store nodes already visited
  const visited = [];
  // find nearest node
  let currentNode = findNearestNode(distances, visited);

  while (currentNode) {
    let distance = distances[currentNode];
    let children = graph.storage.get(currentNode).adjacents

    for (let child in children) {
      if (child === start) {
        continue;
      } else {
        let newDistance = distance + children[child]
        if (!distances[child] || distances[child] > newDistance) {
          distances[child] = newDistance;
          parents[child] = currentNode;
        }
      }
    }
    visited.push(currentNode);
    currentNode = findNearestNode(distances, visited);
  }

  let shortesPath = [end];
  let parent = parents[end];
  while (parent) {
    shortesPath.push(parent);
    parent = parents[parent];
  }
  shortesPath.reverse();

  let results = {
    distance: distances[end],
    path: shortesPath,
  };


  return results;
}

function findNearestNode (distances, visited) {
  let shortest = null;

  for (let node in distances) {
    let currIsShortest = shortest === null || distances[node] < distances[shortest];
    if (currIsShortest && !visited.includes(node)) {
      shortest = node
    }
  }
  return shortest;
}