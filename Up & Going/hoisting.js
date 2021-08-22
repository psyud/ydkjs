var a = 2;

foo(); // 3
console.log(a); // 2

bar(); // 4
console.log(a); // 4

function foo() {
    a = 3;

    console.log(a);

    var a; // With var a, it tells the interpreter to create a new variable in the function scope.
}

function bar() {
    a = 4;

    console.log(a);

    // Without a, it tells the interpreter to look for the variable in the global scope.
}
