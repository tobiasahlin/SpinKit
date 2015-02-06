var dateFormat = require('./../lib/dateformat'),
	assert = require('assert');

var start = 10; // the 10 of March 2013 is a Sunday
for(var dow = 1; dow <= 7; dow++){
	var date = new Date('2013-03-' + (start + dow));
	var N = dateFormat(date,'N');
	assert.equal(N,dow);
	console.log('The ISO-8601 numeric representation of the day "' + date.toString() + '" is ' + N);
}
