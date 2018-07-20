var table = 12;            // Unit of table
var operator = 'addition'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '';              // Message


while ( table < 0 || table > 10 ) {
	table = prompt ( 'Please enter a number from 0 to 10 for an arithmatic table:' );
	if ( table != '' && table != null ) {
		table = Number (table);
		} else {
			i = 11;
		}
}

while ( operator !== '*' && operator !== '+' ) {
	operator = prompt ( "Please enter a '+' to do an addition table , or '*' to do a multipcation table:" );
	if ( operator == '' || operator == null) {
		break;
	}
}

if (operator === '+') {
  // Do addition
  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
} else if (operator === '*') {
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
	}
	} else {
	  msg = 'Please come back again!'
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;