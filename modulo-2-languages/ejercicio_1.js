const array = ["mesa", "silla", "portatil", "carpeta"];

// ejercicio 1 Array operations

const head = arr => {
   const [firstValue] = arr;
   return firstValue;
}

console.log(head(array));

//Tail

const tail = arr => {
    const newArray = [...arr];
    newArray.splice(0, 1);
    return newArray;
}

console.log(tail(array));

//Init

const init = array => {
    const newArray = [...array];
    newArray.pop();
    return newArray;
}

console.log(init(array));

//Last

const last = array => {
    const lastElement = array.pop();
    return lastElement;
}

console.log(last(array));