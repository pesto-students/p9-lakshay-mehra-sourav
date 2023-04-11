/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

/**
 * Used for finding the vertex representing the judge given a trustor - trustee
 * relationship list and the total number of the people in the town
 * @param {number} n Number of people in the town
 * @param {number[][]} trust Array containing all the trustor - trustee relationships
 * @return {number} The vertex number representing the judge or -1
 */

function findJudge(n, trust) {
  const inDegree = new Array(n).fill(0),
    outDegree = new Array(n).fill(0);
  let degreeMapping = {
    maxInDegree: -Infinity,
    maxInDegreeIdx: 0,
    minOutDegree: Infinity,
    minOutDegreeIdx: 0,
  };

  for (let edge of trust) {
    let [sourceVertex, destVertex] = edge;

    // Increasing outdegree of the source vertex
    outDegree[sourceVertex - 1]++;

    // Increasing indegree of the destination vertex
    inDegree[destVertex - 1]++;
  }

  for (let vertex = 1; vertex <= n; vertex++) {
    // Updating the maximum indegree and corresponding vertex
    if (degreeMapping.maxInDegree < inDegree[vertex - 1]) {
      degreeMapping.maxInDegree = inDegree[vertex - 1];
      degreeMapping.maxInDegreeIdx = vertex - 1;
    }

    // Updating the minimum outdegree and corresponding vertex
    if (degreeMapping.minOutDegree > outDegree[vertex - 1]) {
      degreeMapping.minOutDegree = outDegree[vertex - 1];
      degreeMapping.minOutDegreeIdx = vertex - 1;
    }
  }

  // Checking if the vertex with the max indegree and min outdegree matches
  // the other conditions for being a town judge
  if (
    degreeMapping.maxInDegreeIdx == degreeMapping.minOutDegreeIdx &&
    degreeMapping.maxInDegree == n - 1 &&
    degreeMapping.minOutDegree == 0
  ) {
    return degreeMapping.maxInDegreeIdx + 1;
  }

  return -1;
}

let n1 = 2,
  n2 = 3,
  n3 = 1,
  n4 = 3,
  n5 = 11,
  trust1 = [[1, 2]],
  trust2 = [
    [1, 3],
    [2, 3],
    [3, 1],
  ],
  trust3 = [],
  trust4 = [
    [1, 2],
    [2, 3],
  ],
  trust5 = [
    [1, 8],
    [1, 3],
    [2, 8],
    [2, 3],
    [4, 8],
    [4, 3],
    [5, 8],
    [5, 3],
    [6, 8],
    [6, 3],
    [7, 8],
    [7, 3],
    [9, 8],
    [9, 3],
    [11, 8],
    [11, 3],
  ];
console.log("Does town judge exist for 1st edge list:", findJudge(n1, trust1));
console.log("Does town judge exist for 2nd edge list:", findJudge(n2, trust2));
console.log("Does town judge exist for 3rd edge list:", findJudge(n3, trust3));
console.log("Does town judge exist for 4th  edge list:", findJudge(n4, trust4));
console.log("Does town judge exist for 5th edge list:", findJudge(n5, trust5));
