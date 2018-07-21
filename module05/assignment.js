var table;                                  // Unit of table
var i = 1;                                  // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';  // Message
var decimal


table = prompt ( 'Please enter a number for an multiplication table:' );
while ( isNaN ( table ) ) {
	table = prompt ( "That wasn't a number. Please retry to enter a number for an multiplication table or hit cancel to exit:" );
	if ( table == '' || table == null ) {
		i = 12;   // If a user cancelled the prompt window, this will cause the "Do multiplication" loop to bypass.
		break;
		}
}

decimal = table.indexOf ('.');  // To help find how many decimal places the answer should be to.

// Do multiplication
while (i < 11) {
  msg += i + ' x ' + table + ' = ' + (i * table).toFixed ( table.length - decimal - 1 ) + '<br />';  // .toFixed ( table.length - decimal - 1 ) is to round the answer of i * table to the correct answer.  Java seems to have an issue with multipling decimals by 3, 6, & 7.  For example, 3 * 12.2 is 36.599999999999994
  i++;
}

if ( table == '' || table == null ) {
	msg = 'Please come back next time you want to do a multipication table.';
}


// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;