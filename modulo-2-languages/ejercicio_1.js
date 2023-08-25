const array = ["mesa", "silla", "portatil", "carpeta"];

// ejercicio 1 Array operations

const head = arr => {
   const [firstValue] = arr;
   return firstValue;
}

console.log(head(array));

//Tail destructuring
//Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
const tail = arr => {
    const newArray = [...arr];
    newArray.splice(0, 1);
    return newArray;
}

//propuesta del profe

const tail_2 = ([...tail]) => tail;

console.log(tail(array));

//Init
/*Implementa una función init (inmutable), tal que, dado un array como entrada 
devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.*/ 
const init = array => {
    const newArray = [...array];
    newArray.pop();
    return newArray;
}

//propuesta del prfesor
// el slice es un método inmutable
const init_2 = array => array.slice(0, -1);

console.log(init(array));

//Last
/*Implementa una función last (inmutable), 
tal que, dado un array como entrada devuelva el último elemento. */
const last = array => {
    const lastElement = array.pop();
    return lastElement;
}

//propuesta del prfesor
const last_2 = array => array[array.length -1];

console.log(last(array));