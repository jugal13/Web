//scopes in JS

var message = "Hello!";
//nested scope, bubbles from inner to outer, looks for message in sayHello and then global window
function sayHello() {
    console.log(message);
}

// lexical scoping - scope moves from inner functions to outer functions to global window object
function outer(a) {
    var b = 2; 
    
    function inner(c) {
        console.log(a + b + c); 
    } 
    inner(10); 
} 

outer(5);

//shadowing in JS of variables
//as soon as variable is found JS engine stops looking
var message = "Hi!";

function SayHi() {
    var message = "Hello!";
    console.log(message);
}

SayHi();

//scope of variable, encapsulation
function f3() {
    function test1() {
        var x = 5;
        function test2() {
            console.log(x);
        }
        test2();
    }
    test1();
}
f3();

//Anonymous function (IIFE)
function f4() {
    (function () {
        var abc = 111;
        console.log(abc * 2);
    })()
}
f4();
// console.log(abc) will throw an error as the variable is hidden by using IIFE


//introduction of block scope in ES6
//passing parameter to function
function f5() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 100)
    }

    for (var i = 1; i <= 5; i++) {
        setTimeout((function (j) {
            console.log(j);
        })(i), i * 100)
    }
}
f5();

//hoisting
function f6() {
    print("Hello");
    function print(s) {
        console.log(s);
    }
}
f6();