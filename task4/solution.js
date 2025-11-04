const fs = require("fs");

function findSafestPath(map) {
  const n = map.length;
  const m = map[0].length;

  const dp = Array(n)
    .fill(0)
    .map(() => Array(m).fill(Infinity));
  dp[0][0] = map[0][0];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue;

      const fromTop = i > 0 ? dp[i - 1][j] : Infinity;
      const fromLeft = j > 0 ? dp[i][j - 1] : Infinity;

      dp[i][j] = Math.min(fromTop, fromLeft) + map[i][j];
    }
  }

  const path = [];
  let i = n - 1;
  let j = m - 1;

  while (i > 0 || j > 0) {
    path.unshift([i, j]);

    if (i === 0) {
      j--;
    } else if (j === 0) {
      i--;
    } else {
      if (dp[i - 1][j] < dp[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
  }
  path.unshift([0, 0]);

  return {
    totalDanger: dp[n - 1][m - 1],
    path: path,
  };
}

const input = fs
  .readFileSync("task4/CG25task4_input.txt", "utf8")
  .trim()
  .split("\n");

const results = [];

input.forEach((line) => {
  if (line.trim()) {
    const map = JSON.parse(line);
    const result = findSafestPath(map);

    results.push(result.totalDanger);
    result.path.forEach((coord) => {
      results.push(`[${coord[0]}, ${coord[1]}]`);
    });
  }
});

console.log(results.join("\n"));
