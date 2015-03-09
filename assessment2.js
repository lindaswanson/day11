/* Author: Linda Swanson
Control Flow, Logical Operators, String Handling

Allow user to create a password. The requirements are:
- 10+ characters long
- 1+ capital letters OR an "!"
*/

var sget = require('sget');


function isValidPassword(userPassword) {
	if (userPassword.length < 10) {
		console.log("Error: Your password is too short.")
		return false;
	}

	if (userPassword.match(/[A-Z]/) || userPassword.match(/[!]/)) {
		return true;
	} else {
		console.log("Error: Your password must contain either a capital letter or an exclamation point (!).")
		return false;
	}
}


function createPassword() {
	var userPassword = sget("Please enter a password that is at least 10 characters long and includes either a capital letter or an '!'.").trim();

	console.log("test: Password entered is " + userPassword);

	if (isValidPassword(userPassword)) {
		console.log("Excellent!  That is a strong password.");
	} else {
		// console.log("Please try again.");
		createPassword();
	}
}

createPassword();
