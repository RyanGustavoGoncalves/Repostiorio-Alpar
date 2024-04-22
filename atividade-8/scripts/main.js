const arrayteste = ["maçã", "pera", "goiaba"];

function pushCustom(arr, ...value) {
    value.forEach((items) => {
        arr[arr.length] = items;
    })
    return arr.length;
}

pushCustom(arrayteste, "banana", "aiai");
console.log(arrayteste);


function popMelhorado(value) {
    let lastValue = value.length;
    if (lastValue <= 0) {
        console.error("A array ta vazia!");
        return undefined;
    } else {
        const removedItem = value[lastValue - 1];
        value.length = lastValue - 1;
        return removedItem;
    }
}

const arrayteste = ["maçã", "pera", "goiaba"];

console.log(popMelhorado(arrayteste));
console.log(arrayteste);


function shiftMelhorado(value) {
    if (value.length === 0) {
        console.error("A array está vazia!");
        return undefined;
    }

    const removedItem = value[0];

    for (let i = 0; i < value.length - 1; i++) {
        value[i] = value[i + 1];
    }
    value.length = value.length - 1;

    return removedItem;
}

const linguagens = ["Java", "Javascript", "Python", "Go", "Typescript"];

console.log(shiftMelhorado(linguagens));
console.log(linguagens);


function unshift(arr, ...value) {
    const removedIndex = arr.length;
    
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i + value.length] = arr[i];
    }

    for (let i = 0; i < value.length; i++) {
        arr[i] = value[i];
    }

    return removedIndex;
}

const seiLa = ["a", "b", "c", "d"];
console.log(unshift(seiLa, "e", "f"));


function slice(arr, indexStart, indexEnd) {
    let newArray = [];

    if (arr.length < indexEnd) {
        console.error(`Array não possui ${indexEnd} de comprimento!`);
        return;
    }
    for (let count = 0; indexStart < indexEnd; indexStart++) {
        newArray[count] = arr[indexStart];
        count++;
    }
    return newArray;
}

const arr = ["a", "b", "c", "d"];
console.log(slice(arr, 3, 4));


function foreach(arr, callback) {
    for (const item of arr) {
        callback(item);
    }
}

const arr = ["a", "b", "c", "d"];

foreach(arr, (item) => {
    console.log(item);
});

function map(arr, callback) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(callback(arr[i]));
    }
    return newArray;
}

const arr = ["a", "b", "c", "d"];
const novaArray = map(arr, (item) => {
    return item.toUpperCase();
});

console.log(novaArray);