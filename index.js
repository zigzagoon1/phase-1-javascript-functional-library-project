const objectCollection = {dog: "Annie", cat: "Ziggy", snake: "Basil"}
const arrayCollection = ["Annie", "Ziggy", "Basil"];
const arrayNumberCollection = [4, 9, 1];
const testArr = [1, 2, 3, 4]
const testObj = {one: 1, two: 2, three: 3, four: 4};
//myEach takes in a collection (object or array) and a callback function and iterates over the collection
//of elements, passing each in turn to callback function, and returns the original unmodified array

const myEach = (collection, callback) => {
    let newArray = []
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection);
    }
    else {
        newArray = collection;
    }
    for (const el of newArray) {
        callback(el);
    }
    return collection;
}
// myEach(objectCollection, (el) => {
//     console.log(el)
// })
//myMap takes collection and callback, produces a new array but mapping each value in collection through
//transformation function callback and returns the new array without modifying original

const myMap = (collection, callback) => {
    let objArray = []
    const newArray = [];
    if (!Array.isArray(collection)) {
        objArray = Object.values(collection);
    }
    else {
        objArray = collection;
    }
    console.log(objArray)
    for (const el of objArray) {
        console.log(el)
        //console.log(objArray[el])
        newArray.push(callback(el));
    }
    console.log(newArray);

    return newArray;
}
//myMap(testArr, (el) => el + 3)

//mySize takes in a collection and returns an integer representing the number of values in collection

const mySize = (collection) => {
    let newArray = []
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection);
    }
    else {
        newArray = collection;
    }
    let acc = 0;
    // myReduce(newArray, (acc) => {
    //     acc += 1;
    // }, acc)
    for (const el of newArray) {
        acc += 1;
    }
    //console.log(acc);
    return acc; 
}
mySize({dog: "Annie", cat: "Ziggy", snake: "Basil"});

//myReduce takes in collection, callback function, optional starting value for accumulator and iterates
//through collection and updates accumulator each time, returning accumulator value at end - if start
//value for accumulator not provided, first value in collection is start value.
//callback is passed three arguments, current val of acc, current element in iteration, reference to
//entire collection

const myReduce = (collection, callback, startValue = null) => {
    let newArray;
    let indexWithOrWithoutStartValue = startValue === null ? 1 : 0;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection);
    }
    else {
        newArray = collection;
    }
    if (startValue === null) {
    startValue = newArray[0]
    }
    let acc = startValue;
    console.log(acc);
    for (let i = indexWithOrWithoutStartValue; i < mySize(newArray); i++) {
    acc = callback(acc, newArray[i]);
    }
    return acc;    
}
//myReduce(testArr, (acc, val) => (acc + (val * 3)), 10);
//myFind takes in collection and predicate (callback that returns true or false), looks through
//collection and returns first value that passes true in callback, or undefined if none

const myFind = (collection, predicate) => {
    let newArray = []
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection);
    }
    else {
        newArray = collection;
    }
    for (const el of newArray) {
        if (predicate(el)) {
            return el;
        }
    }
    return undefined;
}

//myFilter takes in collection and predicate, returns an array of all values that pass truth test
//returns an empty array if non pass

const myFilter = (collection, predicate) => {
    let newArray = []
    const trueArray = []
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection);
    }
    else {
        newArray = collection;
    }
    for (const el of newArray) {
        if (predicate(el)) {
            trueArray.push(el);
        }
    }
    return trueArray[0] === null ? undefined : trueArray;
}

//myFirst takes in an array and an optional integer n = 0, returns the first element of array if no value passed for
//integer or returns the first n elements
function myFirst(array, n = 0) {
    let firstArray = [];
    if (n === 0 || n === 1) {
        return array[0];
    }
    firstArray = array.splice(0, n)
    return firstArray;
}
//myFirst(testArr, 3);
//myLast takes in array and optional integer n = myLength(array) - 1, returns last element if no n provided
//or returns the last n elements of array

function myLast(array, n = mySize(array)) {
    if (n === mySize(array) || n === 0 || n === 1) {
        return array[mySize(array) - 1];
    }
    return array.splice(array[mySize(array) - n -1], n);
}

//myLast(testArr, 3);

//myKeys takes an object and returns an array of all the keys in the object

function myKeys(object) {
    const keys = [];
    for(const el in object) {
        keys.push(el);
    }
    return keys;
}
myKeys(testObj);
//myValues takes an object and returns an array of all the values of each key in the object

function myValues(object) {
    const values = [];
    for (const key in object) {
    if (object.hasOwnProperty(key)) {
        values.push(object[key]);
    }
  }
  return values;
}
myValues(testObj);