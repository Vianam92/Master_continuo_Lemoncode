//ejercicio 2

const firstArray = ["casa", "silla", "mesa", "carpeta"];
const secondArray = ["familia", "suegra", "cuñaa", "sobrina"];

const concat = (a, b) => {
    const concatArray = [...a, ...b];
    return concatArray;
}

const multiConcat = (a,b,c) => {
    const concatArray = [...a, ...b];
    return concatArray.concat(c);
}

console.log(concat(firstArray, secondArray));
console.log(multiConcat(firstArray, secondArray, firstArray));