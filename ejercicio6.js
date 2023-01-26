let names = ['g','o','m','g'];
let aux = names[0];
names[0] = names[names.length-1];
names[names.length-1] = aux;
console.log(names);