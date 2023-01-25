let arraay= [5, 10, 15, 20, 25, 30, 35];
let x = 50;

for (let i = 0; i < arraay.length; i++) {
for (let j = i+1; j < arraay.length; j++) 
if (arraay[i] + arraay[j] === x) 
console.log("índice  " + i + " e índice " + j);
}
 