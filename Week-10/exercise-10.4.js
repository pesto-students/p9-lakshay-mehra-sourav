/**
 * Inserts a new vertex in the graph
 * !Time Complexity: O(1)
 * !Space Complexity: O(1)
 * @param {object} adjacencyList - The adjacency list in which the vertex needs to be added
 * @param {number} vertex - The value of the new vertex that will be inserted
 */
function addVertex(adjacencyList, vertex) {
  // Adding vertex to the graph if it doesn't already exist
  if (!adjacencyList[vertex]) {
    adjacencyList[vertex] = new Set();
  }
}

/**
 * Converts edge list to adjacency list
 * !Time Complexity: O(e)
 * !Space Complexity: O(1)
 * @param {object} adjacencyList - The adjacency list in which the vertex needs to be added
 * @param {array} edges - The array containing the edges of the graph
 * @returns {object} The adjacency list in which the vertex have been been added
 */
function convertEdgeListToAdjacencyList(adjacencyList, edges) {
  for (let [sourceVertex, destVertex] of edges) {
    // Adding source vertex
    addVertex(adjacencyList, sourceVertex);

    // Adding destination vertex
    addVertex(adjacencyList, destVertex);

    // Adding an edge between the two vertices
    adjacencyList[sourceVertex].add(destVertex);

    adjacencyList[destVertex].add(sourceVertex);
  }

  return adjacencyList;
}

/**
 * Checks if a path exists between two vertices in a graph
 * !Time Complexity: O(n)
 * !Space Complexity: O(1)
 * @param {object} adjacencyList - The adjacency list in which the vertices are present
 * @param {number} source - The starting vertex of the path
 * @param {number} destination - The ending vertex of the path
 * @returns {boolean} If a path exists between the source and destination vertices
 */
function pathExistsBetweenSourceAndDest(adjacencyList, source, destination) {
  let visitedNodes = new Set();
  let stack = [source];

  while (stack.length) {
    // Popping out an item from stack
    let currNode = stack.pop();

    let key = currNode.toString();

    // If current node is same as destination, then it means a path exists between source and destination
    if (key === destination.toString()) {
      return true;
    }

    // Iterating through the neighbours of the current node and adding them to the stack only if they're not visited
    adjacencyList[currNode]?.forEach((node) => {
      let currKey = node.toString();

      if (!visitedNodes.has(currKey)) {
        stack.push(currKey);
      }
    });

    visitedNodes.add(key);
  }

  return false;
}

/**
 * Used for checking a graph contains a valid path from a source to a destination node
 * given the edge list of the graph
 * @param {number} n Number of nodes in the graph
 * @param {number[][]} edges Array containing the edges in the graph
 * @param {number} source The starting vertex of the path
 * @param {number} destination The ending vertex of the path
 * @return {boolean} Whether a path exists between the source and destination node
 */
var validPath = function (n, edges, source, destination) {
  let adjacencyList = {};

  // Converting edge list to adjacency list
  adjacencyList = convertEdgeListToAdjacencyList(adjacencyList, edges);

  return pathExistsBetweenSourceAndDest(adjacencyList, source, destination);
};

let n = 6,
  edges1 = [
    [0, 1],
    [0, 2],
    [3, 5],
    [5, 4],
    [4, 3],
  ],
  edges2 = [
    [0, 1],
    [0, 2],
    [1, 3],
    [3, 5],
    [5, 4],
    [4, 3],
  ];
(source = 0), (dest = 5);

console.log(
  "Does path exist with first edge list:",
  validPath(n, edges1, source, dest)
);
console.log(
  "Does path exist with second edge list:",
  validPath(n, edges2, source, dest)
);
