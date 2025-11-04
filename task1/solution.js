const fs = require("fs");

function findTwoChocolates(weights, target) {
  for (let j = 0; j < weights.length; j++) {
    for (let i = 0; i < j; i++) {
      if (weights[i] + weights[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

const input = fs.readFileSync("task1/CG25task1_input.txt", "utf8").trim().split("\n");

const results = [];
for (let i = 0; i < input.length; i += 2) {
  const weights = JSON.parse(input[i]);
  const target = parseInt(input[i + 1]);

  const result = findTwoChocolates(weights, target);
  if (result === null) {
    results.push("null");
  } else {
    results.push(`${result[0]}, ${result[1]}`);
  }
}

results.forEach((result) => console.log(result));
