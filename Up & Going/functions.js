var foo = function() {
}

let x = function bar() { console.log("in bar"); }

x();

(function() { console.log("Immediately invoked"); })()