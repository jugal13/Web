// new binding
function foo(name) {
    //four things happened when new is used
    //var this get's created
    //linked to prototype
    //set as this
    //returned
    
    //code is almost like this when new is used

    //this = {}
    this.name = name;
    //return this;
}

let a = new foo("Alice");

console.log(a.name);

// return can be changed but initialisation can't be changed
function foo(name) {
    this.name = name;
    return  { name: "Maaz" };
}

let a = new foo("Alice");

console.log(a.name);

// example to prove new has highest priority
function foo(name) {
    this.name = name;
}

let bound = foo.bind({ val: "hard bound"})

bound();

let o = new bound("Maaz");
console.log(o);