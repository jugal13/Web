// explicit binding
// call is giving context to this using the object 

function foo() {
    console.log(this.a);
}

let obj1 = { a: 2 };
let obj2 = { a: 3 };

foo.call(obj1);
foo.call(obj2);

// apply is used to give the same ability
// call can pass n parameters
// first parameter is used for this context 
// rest are passed are normal parameter
// apply is for arrays and objects, explicit this context finding
function foo(val1, val2) {
    console.log(this.a, val1, val2);
}

let obj1 = { a: 2 };
let obj2 = { a: 3 };

foo.call(obj2,1,2);

function foo(val1, val2) {
    console.log(this.a, val1, val2);
}

let obj1 = { a: 2 };
let obj2 = { a: 3 };

foo.apply(obj2, [1, 2]);

// to prevent hardcoding by function calls use explicit function called bind
// JS has bind to do the same task as bound in example below bound 
function foo() {
    console.log(this.a);
}

function bound() {
    let obj1 = { a: 2 };  //hardcoding the value of a 
    foo.call(obj1);
}

bound.call({ a: 23456 });

// bind example

function foo() {
    console.log(this.a);
}

let obj1 = { a: 2 };  //hardcoding the value of a 
let bound = foo.bind(obj1);
bound();
bound.call({ a: 23456 }); 

// this context is always going to be the same because of explicit bind using bund()
