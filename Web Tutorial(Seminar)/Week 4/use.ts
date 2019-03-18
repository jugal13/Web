import {Cow, Point, distance} from './test'; // importing for test.ts file

let p1: Point = { x: 0, y: 0 }; //defining object p1 using interface Point
let p2: Point = { x: 3, y: 4 }; //defining object p2 using interface Point
console.log(distance(p1, p2)); // using distance function from test.ts
// creating object of class Cow
const cow = new Cow();
// calling makesound method of class
cow.MakeSound();