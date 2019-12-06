var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
//selector for body div
var body = document.getElementById("gradient");

var randomBtn =document.getElementById("rdm");

function losowanie(){
	color1.value = "#"+Math.floor(Math.random()*(999999-100000+1)+100000);
	color2.value = "#"+Math.floor(Math.random()*(999999-100000+1)+100000);
	setGradient();
};

//function that change the bacground color
function setGradient() {
	body.style.background //setting the style of bacgound
		= "linear-gradient(to right, "
		+ color1.value 
		+ ", " 
		+ color2.value
		+ ")";
		css.textContent=body.style.background +";"; //alternatywna metoda dodawania tekstu
};

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", losowanie);