/* Author: Linda Swanson
Input, Output, Control Flow

Prompt user for 3 numbers, sort them in descending order, & display them.
*/

var sget = require('sget');

function sortNumbers(numbersToBeSortedArray) {
	//console.log("In sortNumber function. Array to be sorted is: " + numbersToBeSortedArray);
	numbersToBeSortedArray.sort(function(a, b) {return b-a});
	//console.log("In sortNumber function. Sorted array is: " + numbersToBeSortedArray);
}

function getNumberFromUser() {
	var userInputNumber = sget("Please enter a number").trim();

	if (isNaN(userInputNumber)) {
		console.log("Sorry, that is not a number. Please enter a number.");
		getNumberFromUser();
	} else {
		// console.log("userInputNumber returned from getNumberFromUser is " + userInputNumber);
		return userInputNumber;
	}
}

function startNumberSorter () {
	var numbersToBeSortedArray = [];

	var maxNumbers = 3;

	//var testUserInput;

	for (i = 0; i < maxNumbers; i++) {
		// FIXME: why is this returning  "undefined" when they enter a valid number *after* entering invalid text?
		//testUserInput = getNumberFromUser();
		// console.log("testUserInput is: " + testUserInput);
		numbersToBeSortedArray[i] = getNumberFromUser();
	}

	sortNumbers(numbersToBeSortedArray);

	console.log("The numbers you entered, sorted in descending order, are:");
	for (i = 0; i < maxNumbers; i++) {
		console.log(numbersToBeSortedArray[i]);
	}
}

startNumberSorter();
