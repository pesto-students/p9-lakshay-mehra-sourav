/**
 * Converts list of neighbours to adjacency list
 * !Time Complexity: O(n)
 * !Space Complexity: O(1)
 * @param {object} adjacencyList - The adjacency list in which the vertex needs to be added
 * @param {array} neighbourList - The array containing the neighbours of each vertex of the graph
 * @returns {object} The adjacency list in which the vertex have been been added
 */
function convertListToAdjacencyList(adjacencyList, neighbourList) {
  for (let i = 0; i < neighbourList.length; i++) {
    // Initializing neighbourlist as a set
    adjacencyList[i] = new Set(neighbourList[i]);
  }

  return adjacencyList;
}

/**
 * Searches for paths from source to destination vertex in using the DFS algorithm
 * !Time Complexity: O(n)
 * !Space Complexity: O(1)
 * @param {object} adjacencyList - The adjacency list in which the vertex needs to be added
 * @param {number} source - The source node
 * @param {number} dest - The destination node
 * @param {array} output - The array all the possible paths calculated so far
 * @param {array} path - The array containing the path generated so far till the current vertex
 * @returns {object} The adjacency list in which the vertex have been been added
 */
function findAllPaths(adjacencyList, source, dest, output, path) {
  if (source == dest) {
    output.push([...path, source]);
    return;
  }

  for (let neighbour of adjacencyList[source]) {
    findAllPaths(adjacencyList, neighbour, dest, output, [...path, source]);
  }
}

var allPathsSourceTarget = function (graph) {
  let adjacencyList = {};

  // Converting edge list to adjacency list
  adjacencyList = convertListToAdjacencyList(adjacencyList, graph);

  let output = [],
    numberOfNodes = graph.length;

  findAllPaths(adjacencyList, 0, numberOfNodes - 1, output, []);

  return output;
};

let graphs1 = [[1, 2], [3], [3], []],
  graphs2 = [[4, 3, 1], [3, 2, 4], [3], [4], []];

console.log("Possible paths for 1st edge list:", allPathsSourceTarget(graphs1));
console.log("Possible paths for 2nd edge list:", allPathsSourceTarget(graphs2));
