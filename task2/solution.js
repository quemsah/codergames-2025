const fs = require("fs");

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n + 1 }, (_, i) => i);
    this.rank = Array(n + 1).fill(0);
    this.hasCycle = Array(n + 1).fill(false);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(u, v) {
    const rootU = this.find(u);
    const rootV = this.find(v);

    if (rootU === rootV) {
      this.hasCycle[rootU] = true;
      return;
    }

    if (this.rank[rootU] < this.rank[rootV]) {
      this.parent[rootU] = rootV;
      this.hasCycle[rootV] = this.hasCycle[rootV] || this.hasCycle[rootU];
    } else if (this.rank[rootU] > this.rank[rootV]) {
      this.parent[rootV] = rootU;
      this.hasCycle[rootU] = this.hasCycle[rootU] || this.hasCycle[rootV];
    } else {
      this.parent[rootV] = rootU;
      this.hasCycle[rootU] = this.hasCycle[rootU] || this.hasCycle[rootV];
      this.rank[rootU]++;
    }
  }

  countCursedComponents(n) {
    const roots = new Set();
    for (let i = 1; i <= n; i++) {
      const root = this.find(i);
      if (this.hasCycle[root]) {
        roots.add(root);
      }
    }
    return roots.size;
  }
}

const input = fs
  .readFileSync("task2/CG25task2_input.txt", "utf8")
  .trim()
  .split("\n");
const [N, Q] = input[0].split(" ").map(Number);

const uf = new UnionFind(N);
const results = [];

for (let i = 1; i <= Q; i++) {
  const line = input[i].trim();
  if (line === "?") {
    results.push(uf.countCursedComponents(N));
  } else {
    const [_, u, v] = line.split(" ");
    uf.union(Number(u), Number(v));
  }
}

results.forEach((r) => console.log(r));
