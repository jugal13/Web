// this is default binding
function foo() {
    console.log(this.a); //this means window object
}
var a = 2;
foo(); //This is called callsite and values of vars in functions are determined from callsite
// a is in global scope along with foo and value is on window object 

// no other binding hence default biding and window object is used
function foo() {
    function bar() {
        console.log(this.a); //this means window object
    }
    bar();
}
var a = 2;
foo();