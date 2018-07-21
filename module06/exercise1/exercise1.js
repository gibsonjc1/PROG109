var table = 12;            // Unit of table
var operator;              // Type of calculation


while ( table < 0 || table > 10 ) {
	table = prompt ( 'Please enter a number from 0 to 10 for an arithmatic table:' );
	if ( table != '' && table != null ) {
		table = Number (table);
	}
}

while ( operator !== '*' && operator !== '+' ) {
	operator = prompt ( "Please enter a '+' to do an addition table , or '*' to do a multipcation table:" );
	if ( operator == '' || operator == null) {
		break;
	}
}

generateTable ( table , operator );

function generateTable ( base, operator ) {
	var i = 1;             // Set counter to 1
	var msg = '';          // Message
	debugger;
	base = Number ( base );
	if (operator === '+') {
		// Do addition
		while (i < 11) {
			msg += i + ' + ' + base + ' = ' + (i + base) + '<br />';
			i++;
		}
	} else {
		// Do multiplication
		while (i < 11) {
			msg += i + ' x ' + base + ' = ' + (i * base) + '<br />';
			i++;
		}
	}

	if ( base == '' || base == null ) {
		msg = 'Have a nice day!';
	}
	if ( operator == '' || operator == null ) {
		msg = 'Have a nice day!';
	}
	debugger;
	var el = document.getElementById('blackboard');
	el.innerHTML = msg;
	debugger;
}