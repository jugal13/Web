let stack = require("./stack");
let queue = require("./queue");

let Stack = new stack();
let Queue = new queue();

console.log("Stack");
Stack.push(1);
Stack.push(2);
console.log("Current Stack");
Stack.print();
console.log("Top");
console.log(Stack.return_top());
console.log("Pop");
console.log(Stack.pop());
Stack.clear();
console.log("Clear");
Stack.print();

console.log("Queue");
Queue.enqueue(1);
Queue.enqueue(2);
Queue.enqueue(3);
console.log("Current Queue");
Queue.print();
console.log("Dequeue");
console.log(Queue.dequeue());
console.log("Clear");
Queue.clear();
Queue.print();
