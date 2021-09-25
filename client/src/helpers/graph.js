class Node {
  constructor(value, tile) {
    this.adjacents = {};
    this.value = value;
    this.tile = tile;
    this.searched = false;
    this.parent = null;
  }

  addAdjacent(node, weight=1) {
    this.adjacents[node.value] = weight;
  }

  removeAdjacent(node) {
    delete this.adjacents[node.value]
  }

  getAdjacents() {
    return this.adjacents;
  }

  isAdjacent(node) {
    return node.value in this.adjacents;
  }
}


class Graph {
  constructor() {
    this.storage = new Map();
  }

  addVertex(value, tile) {
    if (!this.storage.has(value)) {
    const vertex = new Node(value, tile);
    this.storage.set(value, vertex);
    }
  }

  removeVertex(value) {
    const node = this.storage.get(value);
    const adjacents = node.getAdjacents();
    this.storage.delete(value);
    for (let key in adjacents) {
      console.log(key)
      const adjacentNode = this.storage.get(key);
      adjacentNode.removeAdjacent(node);
    }
  }

  addEdge(start, end, weight) {
    const startNode = this.storage.get(start);
    const endNode = this.storage.get(end);
    startNode.addAdjacent(endNode, weight);
    endNode.addAdjacent (startNode, weight);
  }

  removeEdge(start, end) {
    const startNode = this.storage.get(start);
    const endNode = this.storage.get(end);
    startNode.removeAdjacent(endNode);
    endNode.removeAdjacent(startNode);
  }
}

export default Graph