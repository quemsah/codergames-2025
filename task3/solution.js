const fs = require("fs");

const input = fs
  .readFileSync("task3/CG25task3_input.txt", "utf8")
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const M = parseInt(input[1]);

const passages = {};
const hasIncoming = new Set();

for (let i = 2; i < 2 + N; i++) {
  const parts = input[i].split(",").map(Number);
  const room = parts[0];
  const destinations = parts.slice(1);
  passages[room] = destinations;

  for (const dest of destinations) {
    hasIncoming.add(dest);
  }
}

const vanishedRooms = new Set();
for (let i = 2 + N; i < 2 + N + M; i++) {
  vanishedRooms.add(parseInt(input[i]));
}

const mainEntrance = Array.from({ length: N }, (_, i) => i + 1).find(
  (room) => !hasIncoming.has(room)
);

const additionallyVanished = new Set();
for (let room = 1; room <= N; room++) {
  if (vanishedRooms.has(room)) continue;

  const connections = passages[room] || [];
  const vanishedConnections = connections.filter((dest) =>
    vanishedRooms.has(dest)
  );

  if (vanishedConnections.length >= 2) {
    additionallyVanished.add(room);
  }
}

const allVanished = new Set([...vanishedRooms, ...additionallyVanished]);

const queue = [mainEntrance];
const reachable = new Set([mainEntrance]);

while (queue.length > 0) {
  const current = queue.shift();
  const destinations = passages[current] || [];

  for (const dest of destinations) {
    if (!allVanished.has(dest) && !reachable.has(dest)) {
      reachable.add(dest);
      queue.push(dest);
    }
  }
}

console.log(mainEntrance);
console.log(additionallyVanished.size);
console.log(reachable.size);
