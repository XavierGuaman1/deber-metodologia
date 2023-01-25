let num = [3, 5, 6, 3, 3, 5, 6, 7,1];
let contador = 0;
for (let i = 0; i < num.length; i++) {
if (num[i] % 2 !== 0) {
contador++;
}
}

console.log("El array tiene " + contador + " números impares.");