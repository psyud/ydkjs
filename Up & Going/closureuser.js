// closure means the abilibty of a function to remember the value after the function is defined.
// actually "closure" means nothing. Fuck javascript.
function User(){
	var username, password;

	function doLogin(user,pw) {
		username = user;
		password = pw;

		// do the rest of the login work
        console.log("Logging in");
	}


	return {
        doLogin
    };
}

// create a `User` module instance
var fred = User();

fred.doLogin("fred", "helloworld");