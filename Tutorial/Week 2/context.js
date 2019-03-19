// JavaScript this context

// this isnt the same as in C++ and JAVA, Has a different meaning
// Example to show 'this' in JS is different from C++ and JAVA
// Count remains zero
function foo() {
    this.count++;
}

foo.count = 0;
foo();

console.log(foobar.count);

// count changes
function foo() {
    foo.count++;
}

foo.count = 0;
foo();

console.log(foo.count);

// this is used for scope and not for class or function variables