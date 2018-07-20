var weight;
var height;
var bmi;
var age;
var adjBmi;

weight = parseFloat ( prompt ('Please enter your weight in pounds') );
height = parseFloat ( prompt ('Please enter your height in inches') );
age = parseInt ( prompt ('Please enter your age in years') );

bmi = ( 0.454 * weight ) / ( Math.pow (height * 0.0254,2) ) ;
bmi = ( Math.round ( bmi * 10 ) ) / 10;

if ( age < 19 ) {
	document.write ( "<h2> You're too young to use this BMI calculator.</h2>" );
} else if ( age < 25 ) {
	adjBmi = bmi;
} else if ( age < 35 ) {
	adjBmi = bmi - 1;
} else if ( age < 45 ) {
	adjBmi = bmi - 2;
} else if ( age < 55 ) {
	adjBmi = bmi - 3;
} else if ( age < 65 ) {
	adjBmi = bmi - 4;
} else {
	adjBmi = bmi - 5;
} 

if ( adjBmi === 0 ) {	
	document.write ( "<h2> This calculator only is designed for people over 19 years old.</h2>" );
} else if ( adjBmi < 16) {
document.write ( '<h3> Your BMI score is: ' + bmi + '</h3> <h3> Your age adjusted BMI score is: ' + adjBmi + '</h3> <h2> This means, acording to your BMI catagory that your are severely underweight. </h2>' );
} else if ( adjBmi < 18.5) {
document.write ( '<h3> Your BMI score is: ' + bmi + '</h3> <h3> Your age adjusted BMI score is: ' + adjBmi + '</h3> <h2> This means, acording to your BMI catagory that your are underweight. </h2>' );
} else if ( adjBmi < 25) {
document.write ( '<h3> Your BMI score is: ' + bmi + '</h3> <h3> Your age adjusted BMI score is: ' + adjBmi + '</h3> <h2> This means, acording to your BMI catagory that your weight is ideal. </h2>' );
} else if ( adjBmi < 30) {
document.write ( '<h3> Your BMI score is: ' + bmi + '</h3> <h3> Your age adjusted BMI score is: ' + adjBmi + '</h3> <h2> This means, acording to your BMI catagory that your are overweight. </h2>' );
} else if ( adjBmi < 35) {
document.write ( '<h3> Your BMI score is: ' + bmi + '</h3> <h3> Your age adjusted BMI score is: ' + adjBmi + '</h3> <h2> This means, acording to your BMI catagory that your are moderately obese. </h2>' );
} else if ( adjBmi < 40) {
document.write ( '<h3> Your BMI score is: ' + bmi + '</h3> <h3> Your age adjusted BMI score is: ' + adjBmi + '</h3> <h2> This means, acording to your BMI catagory that your are severely obese. </h2>' );
} else {
document.write ( '<h3> Your BMI score is: ' + bmi + '</h3> <h3> Your age adjusted BMI score is: ' + adjBmi + '</h3> <h2> This means, acording to your BMI catagory that your are very severely obese. </h2>' );
} 