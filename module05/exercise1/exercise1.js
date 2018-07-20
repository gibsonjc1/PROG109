var today = new Date();
var hourNow = today.getHours();
var greeting;
var firstName;
var lastName

alert('Welcome user!');
firstName = prompt ('Please enter your first name');
lastName = prompt ('Please enter your last name');

if (hourNow > 18) {
    greeting = 'Good evening,<br />'+firstName+' '+lastName+'!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon,<br />'+firstName+' '+lastName+'!';
} else if (hourNow > 0) {
    greeting = 'Good morning,<br />'+firstName+' '+lastName+'!';
} else {
    greeting = 'Welcome,<br />'+firstName+' '+lastName+'!';
}

document.write('<h3>' + greeting + '</h3>');
