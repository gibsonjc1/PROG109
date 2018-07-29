// Calcualate and display time in <p id="date time"> of .html

var x = setInterval(displayDynamicTimes, 1000);
// Makes the time and date update every second (or 1000 milliseconds).

function displayDynamicTimes () {

	function formatDateTime (dateTime) {
		var dayName = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
		var monthName = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
		var date;
		
		if (dateTime.getDate() == "1" || dateTime.getDate() == "21" || dateTime.getDate() == "31") {
			date = dateTime.getDate() + "<sup>st</sup>";
		} else if (dateTime.getDate() == "2" || dateTime.getDate() == "22") {
			date = dateTime.getDate() + "<sup>nd</sup>";
		} else if (dateTime.getDate() == "3" || dateTime.getDate() == "23") {
			date = dateTime.getDate() + "<sup>rd</sup>";
		} else {
			date = dateTime.getDate() + "<sup>th</sup>";
		}
		
		// Removes the seconds and the second colon from the the time.  Example: 8:23:45 AM => 8:23 AM
//		var secondColon = dateTime.toLocaleTimeString().lastIndexOf(':');
		var time = dateTime.toLocaleTimeString()//.substring(0,secondColon) + dateTime.toLocaleTimeString().substring(secondColon+3,dateTime.toLocaleTimeString().length);
	
	return (dayName[dateTime.getDay()] + ", " + monthName[dateTime.getMonth()] + " " +date + " " + dateTime.getFullYear() + " at " + time);
	}
	
	var currentDateTime = formatDateTime (new Date());
	var editedDateTime = formatDateTime (new Date(document.lastModified));
	
	document.getElementById('date time').innerHTML = "The current date and time is: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp " + currentDateTime + ".<br>The html of this page was last modified on: &nbsp " + editedDateTime + ".";
	
}
//----------------------------------------------------------------------



//----------------------------------------------------------------------

var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
