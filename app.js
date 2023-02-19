class Graph {
  constructor() {
    this.node = {};
    this.edge = {};
  }

  adddNode(id, value) {
    this.node[id] = value;
  }

  adddEdge(startNode, endNode) {
    if (this.edge[startNode] && this.edge[startNode].indexOf(endNode) === -1) {
      this.edge[startNode].push(endNode);
    } else {
      this.edge[startNode] = [endNode];
    }
  }

  removeNode(nodeId) {
    this.node[nodeId] = undefined;

    Reflect.deleteProperty(this.edge, nodeId);

    for (const edgeId in this.edge) {
      let i = 0;
      for (const endNode of this.edge[edgeId]) {
        if (endNode === nodeId) {
          this.edge[edgeId].splice(i, 1);
          break;
        }
        i++;
      }
    }
  }
}

const graph = new Graph();

graph.adddNode(1, "book 1");
graph.adddNode(2, "book 2");
graph.adddNode(3, "book 3");

graph.adddEdge(1, 2);
graph.adddEdge(1, 3);
graph.adddEdge(3, 2);

graph.removeNode(2)

console.log(graph);
