// variable declarartions
var a = 1;
let b = 2;
const c = 3;
const d = [1,2]; // reference of d is constant not the array

d.push(3);
console.log(d);

// for loops
for (let i = 1; i <= 10; i++ ) {
    console.log(i);
}

//while loop
let i = 1;
while( i <= 10 ){
    console.log(i++);
}

let j = 1;
do  {
    console.log(j++);
} while( j <= 10 );

// Strings in javascript
const sentence = "I like JS";

const template = `Hi, I'm Maaz. ${sentence}` // interpolation in javascript

//functions
function sayHello(name = "Maaz") {
    console.log(`Hello ${name}!`);
}

//arrow function shorter form of functions

const sayOla = (name = "Maaz") => console.log(`Ola ${name}`);
//short arrow function is
const sayOla2 = name => console.log(`Ola ${name}`);

// function can be passed as arguments
function f1() {
    function callMe(callback) {
        callback("Hello");
    }
    function c(message) {
        console.log(message);
    }
    callMe(c);
}
f1();

// variable mapping
function f2() {
    const arr = [1, 2, 3, 4];  //arrays in JS
    const doubled = arr.map(ele => 2 * ele); //mapping each element
    const multiplesOf4 = arr.map(ele => 2 * ele).filter(ele => ele % 4 === 0);
    const sum = arr.reduce((memo, ele) => memo + ele, 0); 
    console.log("Array " + arr);
    console.log("Doubled " + doubled);
    console.log("Multiples of 4 "+ multiplesOf4);
    console.log("Sum" + sum);
}
f2();

// Everything, other than primitives is an object!
function increment(object) {
    object.value += 1; 
}
let obj = { value: 1 };
console.log(obj); // { value: 1 }
increment(obj);
console.log(obj); // { value: 2 }