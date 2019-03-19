// Foo is an object. Functions are also objects in JS

function Foo() {
    console.log(this.name);
}

let obj1 = { name: "Maaz" }; //JavaScript Object
let obj2 = { name: "Alice" }; //JavaScript Object

Foo.call(obj1); //Call is used with functions
Foo.call(obj2); //Call is used with function

Foo(obj1);

// Binding for this 
// Default binding
// Implicit binding
// Explicit binding
// New binding
// callsite determines the context for this anywhere
// If no binding rules apply then default binding occurs
// precendence of binding 
// new trumps explicit trumps implicit trumps default

// no binding occured hence default binding happened
function foo() {
    console.log(this.a);
}

let obj = {
    a:2,
    test: foo
}
var x = obj.test();

x();

//another example

function foo(name) {
    this.name = name;
    return function test() {
        console.log(this.name);
    }
}
var name = "Global";
let ret = foo.call({ name: "Maaz" });
ret(); //default binding
ret.call({ name: "Alice" }); //explicit binding