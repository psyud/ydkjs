function foo(){
    {
        var a = 100; // using `var` makes the variable available in outer scopes
    }

    console.log(a); // 100
}

function foofoo() {
    {
        {
            var a = 100;
        }
    }

    console.log(a); // 100
}

function bar() {
    {
        let a = 100;
    }

    console.log(a); // Exception: a is not defined
}

foofoo();