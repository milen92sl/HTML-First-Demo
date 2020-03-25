[24,51,1,3,5,1,6,19]
[13,59,21,1,53,21,49]
15 

let first= [1, 8, 5];
let second= [4, 9, 2];
let target = 7;
let minDiif= Number.MAX_SAFE_INTEGER;
let result = [];
function solve (firstArr, secondArr) {
firstArr.sort((a, b)=> a - b);
secondArr.sort((a, b)=> a - b);

let x = firstArr.length - 1;
let y = 0;

while (x > 0 && y < secondArr.length) {
let sum = Math.abs(firstArr[x] + secondArr[y]);

let diff = Math.abs(sum - target);

if (diff < minDiff) {
    result = Math.abs[firstArr[x], secondArr[y]]
    minDiff = diff;
}
if (sum >= target) {
    x--;

}
else {
    y++;
}
}
}
    console.log(result);

