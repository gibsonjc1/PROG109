var myRandom;
var colB =[];     //column B
var colI =[];     //column I
var colN =[];     //column N
var colG =[];     //column G
var colO =[];     //column O

fillRow (colB,1);
fillRow (colI,16);
fillRow (colN,31);
fillRow (colG,46);
fillRow (colO,61);


function fillRow (colX,colAdd) {
	for (var i=0; i<5; i++) {
		
		do {
			myRandom = Math.floor(Math.random()*15+colAdd);
			
			if (myRandom<10) {
				myRandom = "&nbsp" + myRandom;
			}
		
		} while (dupNumber(colX, myRandom));
		
		colX[i]=myRandom;
	}
	
	return colX;
}

//This function checks that there is no duplicated number before adding that number to the column
function dupNumber(column, number) {
	var dup = false;
	var i=0;
	
	do {
		if (column[i]===number)
			dup = true;
		else
			i++;
	} while (!dup && i < column.length);
	
	return dup;
}

colN [2] = "&nbsp;&nbsp";

document.getElementById('output').innerHTML = "<p>&nbspB&nbsp&nbspI&nbsp&nbspN&nbsp&nbspG&nbsp&nbspO</p>     <p>" + colB[0] + " " + colI[0] + " " + colN[0] + " " + colG[0] + " " + colO[0] + "</p>     <p>" + colB[1] + " " + colI[1] + " " + colN[1] + " " + colG[1] + " " + colO[1] + "</p>     <p>" + colB[2] + " " + colI[2] + " " + colN[2] + " " + colG[2] + " " + colO[2] + "</p>     <p>" + colB[3] + " " + colI[3] + " " + colN[3] + " " + colG[3] + " " + colO[3] + "</p>     <p>" + colB[4] + " " + colI[4] + " " + colN[4] + " " + colG[4] + " " + colO[4] + "</p>";
