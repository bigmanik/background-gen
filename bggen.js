var css = document.querySelector("h3");
var onecolor = document.querySelector(".onecolor");
var twocolor= document.querySelector(".twocolor");
var body = document.getElementById("body") ;

function setGradient(){
	body.style.background = "linear-gradient(to left,"
	 + onecolor.value
	 + ", " 
	 + twocolor.value
	  + " )";
}

onecolor.addEventListener("input", setGradient);
	


twocolor.addEventListener("input", setGradient
);

