// this is implicit binding
function foo() {
    console.log(this.a); //this holds the object obj and value changed based on the object that was called
}
let obj = {
    a: 2,
    foo: foo //foo is a reference to the function foo and the obj is used to call the function by reference 
};

obj.foo();

//example of implicit

function foo() {
    console.log(this.a); //this holds the object obj and value changed based on the object that was called and value of a is deteremined by the last call, and value of a is referenced by that 
}
let obj = {
    a: 2,
    foo: foo //foo is a reference to the function foo and the obj is used to call the function by reference 
};

let master = {
    a: 2345,
    obj: obj
};

master.obj.foo();