var myImages = ["SEA-SIN.jpg", "sq11Flight.jpg", "singaporeSunset.jpg", "singaporeArtTrees.jpg", "SIN-MLE.jpg","male.jpg", "overwaterSuite.jpg", "overwaterSuiteSunrise.jpg", "scubaSpa.jpg", "scubaSpaSunset.jpg", "MLE-CPT.jpg", "robbenIslandFerry.jpg", "nMandelaCell.jpg", "prisoner.jpg", "tableMt.jpg", "tableMtTrail.jpg", "safariTent.jpg", "babyElephant.jpg", "giraffe.jpg", "lioness.jpg", "tiredRhino.jpg", "cheetahCub1.jpg", "cheetahCub2.jpg", "cheetahCub3.jpg", "CPT-SEA.jpg"];

var captionImages =["Routing Seattle to Singapore via Los Angeles and Tokyo", "Cake Onboard Singapore Airlines", "Singapore Sunset", "Singapore Supertrees", "Routing Singapore to Malé", "Malé, Capital of The Maldives", "Overwater Suites", "Sunrise Outside Our Suite", "ScubaSpa Live-Aboard Dive Boat", "Sunset Onboard ScubaSpa", "Routing Malé to Capetown via Doha", "Capetown and Table Mountain from Robben Island Ferry", "Nelson Mandela's Cell on Robben Island", "A Former Political Prisoner of Robben Island Talks About His Imprisonment", "Climbing Table Mountain", "India Venster Trail up Table Mountain", "Our Tent While on Safari", "Baby Elephant Staying Close to Mom", "Two Giraffes", "Lioness Guarding Her Kill", "Rhino Settling in for a Nap on Our Trail", "Cheetah Cub Lounging with Mom", "Cheetah Mom on the Lookout for Danger with Her Four Cubs", "Two Cheetah Cubs Rough-housing", "Routing Capetown to Seattle via Johannesburg and Frankfurt"];

var index=0; 

 function updateImage(){
	document.getElementById("slideshow").src = "artifact-05images/" + myImages[index];
	document.getElementById("slideshow").alt= captionImages[index];
	document.getElementById("caption").innerHTML = "<p>" + captionImages[index] + "<br>Image " + (index+1) + " of 25</p>"; 
} 

function next(){
	if (myImages.length === index + 1)
		index=0;
	else
		index++;
	updateImage();
} 
 

function back(){
	if (index === 0)
		index=myImages.length-1;
	else
		index--;
	updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 


 function autoSlide(){
	if (document.getElementById("auto").checked)
		next(); 
}

setInterval(autoSlide,2000); // Next