// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
// When you type characters into the input field, the output element should mirror the text in the input field.
// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
// The first section's text should be bold.
// The last section's text should be bold and italicized.
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.


function showTarget(e) {
	var a = document.getElementById("output-target");
	// console.log(e);
	document.getElementById("guinea-pig").classList.remove("addColor", "addSize" , "addBorder", "addBorderRadius");
	
	if (e.target.id === "add-color" ){
		document.getElementById("guinea-pig").classList.add("addColor"); 	 //add color
	}
	else if (e.target.id === "make-large" ){
		document.getElementById("guinea-pig").classList.add("addSize");		//increase fount size
	}
	else if (e.target.id === "add-border" ){
		document.getElementById("guinea-pig").classList.add("addBorder");	//add border
	}
	else if (e.target.id === "add-rounding"){
		
		document.getElementById("guinea-pig").classList.add("addBorderRadius");	//add border radius
	}
	else {	
		a.innerHTML  =  `You clicked on ${e.target.innerText} section`;
		  }
	
}

//***************************************
//Mouse over event handle
//***************************************
function mouseOverH1 (e) {
	if (e.target.innerText === 'Page title') {
		// console.log(e);
		document.getElementById("output-target").innerHTML = "You moved your mouse over the header";
		e.target.addEventListener('mouseleave', mouseLeaveH1);
	}
}

//***************************************
//Mouse leave event handle
//***************************************
function mouseLeaveH1 (e) {
	
	if (e.target.innerText === 'Page title') {
		document.getElementById("output-target").innerHTML = "You left me!!";
		// e.target.removeEventListener("mouseover", mouseLeaveH1);
	}
}

//***************************************
//text typing event handle
//***************************************
function typingText (e) {
	document.getElementById("output-target").innerHTML =  this.value;
}

//***************************************
//add EvenListener
//***************************************
document.body.addEventListener('click', showTarget);
document.getElementById("page-title").addEventListener('mouseover', mouseOverH1);
document.getElementById("keypress-input").addEventListener('keyup', typingText);
