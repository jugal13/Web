// Q1
function now() {
    console.log("now");
}
function later() {
    console.log("later");
}
now();
setTimeout(later, 0); //puts the callback to the end of the message queue hence output is now end later
console.log("end");

// Q2
setTimeout(function() {
    console.log("when?");    
}, 100); //delay of hundred milliseconds prints the output after the time has elapsed and when call back occurs
let a = 10;
for(o = 0; o < 100; o++) {
    a++
}

// Q3
function buyBurger(money) {
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            // reject("no bread");
            resolve("burger");
        }, 5000);
    })
}
let receipt = buyBurger(100);
receipt.then(function success(tray){
    console.log(tray);
}, function failure(reason) {
    console.log(reason);
})

// Q4
p = Promise.resolve(2);
p.then(function(value) {
    console.log(value);
});
p.then(function(value) {
    console.log(value = 1234);
});
// Q4 with chaining
p = Promise.resolve(2);
p.then(function(value) {
    console.log(value);
}).then(function(value) {
    console.log(value = 1234);
})

// Q5
p = Promise.resolve(5);
p.then(function(value) {
    return new Promise(function(resolve){
        resolve(value = 5);
    },1000);
}).then(function(value) {
    console.log(value);
})

// Q6
p = Promise.resolve(2);
p.then(function() {
}).then(function() {
});

// Q7
p1 = Promise.resolve(2);
p2 = Promise.resolve(4);
p3 = Promise.resolve(6);
Promise.all([p1,p2,p3]).then(function(values) {
    console.log(values);
})

// Q8
p1 = Promise.resolve(function(resolve) {
    resolve("P1");
}, 1000);
p2 = Promise.resolve(Promise.resolve(function (resolve) {
    resolve("P1");
}, 3000));
p3 = Promise.resolve(8);
Promise.race([p1,p2,p3]).then(function(values){
    console.log(values);
})
