var foo = {
    a: 123
}

var bar = Object.create(foo);

console.log(bar.a); // 123. a does not exist in bar, so it finds in the prototype link. foo.a is found in the link