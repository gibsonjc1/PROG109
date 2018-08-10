//----------------------------------------------------------------------
// Calculate and display time in <p id="date time"> of .html
//----------------------------------------------------------------------

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
		
		var time = dateTime.toLocaleTimeString();
	
	return (dayName[dateTime.getDay()] + ", " + monthName[dateTime.getMonth()] + " " +date + " " + dateTime.getFullYear() + " at " + time);
	}
	
	var currentDateTime = formatDateTime (new Date());
	var editedDateTime = formatDateTime (new Date(document.lastModified));
	
	document.getElementById('date-time').innerHTML = "The current date and time is: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp " + currentDateTime + ".<br>The html of this page was last modified on: &nbsp " + editedDateTime + ".";
	
}
//----------------------------------------------------------------------
// Validates the user form on the contact me page
//----------------------------------------------------------------------

function Validate() {
	
	var formIsReady = [false, false, false];
	
	var name = document.getElementById("nameLoc").value;
	var email = document.getElementById("emailLoc").value;
	var comments = document.getElementById("commentsLoc").value;
	
	var nameError;
	var emailError;
	var commentsError;
	
	
	function rightLength (localWord) {
		if (localWord === "" || localWord === null)
			return " required.</p>";
		else
			return "";
	}
	
//----------NAME----------
	nameError = rightLength (name);
	
	if (nameError !== "") {
		nameLoc.style.background = "salmon";
		document.getElementById('nameError').innerHTML = '<p><img src="images/warning.png" alt="Warning Icon" title="Warning Icon" height="30" /> Your name is' + nameError;
		formIsReady [0] = false;
	} else if (!/^[a-zA-Z\s-]+$/.test(name)) {
		nameLoc.style.background = "salmon";
		document.getElementById('nameError').innerHTML = '<p><img src="images/warning.png" alt="Warning Icon" title="Warning Icon" height="30" /> Your name can only contain letters, dashes (-) or spaces.</p>';
		formIsReady [0] = false;
	} else {
		nameLoc.style.background = "white";
		document.getElementById('nameError').innerHTML = "";
		formIsReady [0] = true;
	}
	
//----------EMAIL comments----------
	
/*
This is based on the rules from
https://social.technet.microsoft.com/Forums/exchange/en-US/69f393aa-d555-4f8f-bb16-c636a129fc25/what-are-valid-and-invalid-email-comments-characters
where only the domain name is validated as following hostname rules.
*/
	emailError = rightLength (email);
	
	var atLoc = email.lastIndexOf("@");	
	var emailLen = email.length;
	var domain = email.substring(atLoc + 1,emailLen);
		
	if (emailError !== "") {
		emailLoc.style.background = "salmon";
		document.getElementById('emailError').innerHTML = '<p><img src="images/warning.png" alt="Warning Icon" title="Warning Icon" height="30" /> Your email address is ' + emailError;
		formIsReady [1] = false;
	} else if (atLoc <= 0 || !/^[\w.-]+$/.test(domain) || domain.lastIndexOf(".") <= 0) {
		emailLoc.style.background = "salmon";
		document.getElementById('emailError').innerHTML = '<p><img src="images/warning.png" alt="Warning Icon" title="Warning Icon" height="30" /> Not a valid email address.</p>';
		formIsReady [1] = false;
	} else {
		emailLoc.style.background = "white";
		document.getElementById('emailError').innerHTML = "";
		formIsReady [1] = true;
	}
	
	
//----------COMMENTS----------
	commentsError = rightLength (comments);
	
	if (commentsError !== "") {
		commentsLoc.style.background = "salmon";
		document.getElementById('commentsError').innerHTML = '<p><img src="images/warning.png" alt="Warning Icon" title="Warning Icon" height="30" /> Comments are' + commentsError;
		formIsReady [2] = false;
	} else {
		commentsLoc.style.background = "white";
		document.getElementById('commentsError').innerHTML = "";
		formIsReady [2] = true;
	}
	
//----------TO CHECK THAT EVERY REQUIRED FIELD IS READY----------
	for (i = 0; i < 3; i++) {
		if (!formIsReady [i])
			return false;
	}
	
	return true;
  }



//----------------------------------------------------------------------

var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
