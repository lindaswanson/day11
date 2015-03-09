/* Author: Linda Swanson
Arrays & Loops

User enters each day's average temperatures for a week.
Calculate & display the weekly average temperature.
*/

var sget = require('sget');

function getDailyAveTemp(day) {
	var dailyAveTemp = Number(sget("Please enter the average temperature for day " + (day +1) + ": ").trim());
	//console.log("test: in getDailyAveTemp, dailyAveTemp is " + dailyAveTemp);
	return dailyAveTemp;
}

function calculateWeeklyAveTemp() {

	var maxDaysToCalc = 7;
	var dailyTempArray = [];
	var totalWeeklyTemp = 0;


	for (day = 0; day < maxDaysToCalc; day++) {
		dailyTempArray[day] = getDailyAveTemp(day);
	}

	//console.log("test: in calculateWeeklyAveTemp dailyTempArray is " + dailyTempArray);

	for (day = 0; day < maxDaysToCalc; day++) {
		totalWeeklyTemp += dailyTempArray[day];
	}

	console.log("The average weekly temperature was " + (totalWeeklyTemp/maxDaysToCalc) + " degrees.");
}

calculateWeeklyAveTemp();
