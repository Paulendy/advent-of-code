const list = await Deno.readTextFile("./day1/input.txt");

const left: number[] = [];
const right: number[] = [];

list.trim().split("\r\n").forEach((line) => {
  const [leftVal, rightVal] = line.split(/\s+/);
  left.push(Number(leftVal));
  right.push(Number(rightVal));
});

left.sort();
right.sort();

const difference = left.map((leftVal, i) => {
  return Math.abs(leftVal - right[i]);
}).reduce((accumulator, current) => accumulator + current, 0);

const similarity = left.map((leftVal) => {
  return leftVal * right.filter((v) => leftVal === v).length;
}).reduce((accumulator, current) => accumulator + current, 0);

console.log(`Total Difference: ${difference}`);
console.log(`Similarity Score: ${similarity}`);
