// A word of caution, this `this` is the crazy shit you'll ever see in any programming language

function foo() {
	console.log( this.bar );
}

bar = "global";
var obj1 = {
	bar: "obj1",
	foo: foo
};

var obj2 = {
	bar: "obj2"
};

foo(); // the enclosing scope of `foo()` is the global scope. There is `bar` in global scope
obj1.foo(); // the enclosing scope of `foo()` is obj1. There is `bar` = "obj1" in obj1's scope.
foo.call( obj2 ); // idk wtf foo.call() is
new foo(); // the enclosing scope would be an empty object.