// lexical this

function foo(name) {
    this.name = name;
    return function test() {
        console.log(this.name);
    }
}
let ret = foo("Maaz");
ret();