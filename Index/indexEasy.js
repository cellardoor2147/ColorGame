function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

// VARIABLES
var colors = [];
var squares = document.getElementsByClassName("square");
var correctColorIndex = getRandomInt(2);
var correctColorText = document.getElementById("correctColorText");
var winOrLoseText = document.getElementById("winOrLoseText");
var resetButton = document.getElementById("resetButton");
var hardButton = document.getElementById("hardButton");
var gameOver = false;

// ASSIGNS RANDOM RGB VALUES TO THE COLORS ARRAY
for (var i = 0; i < 3; i++) {
	var valOne = getRandomInt(255);
	var valTwo = getRandomInt(255);
	var valThree = getRandomInt(255);

	colors.push(`rgb(${valOne}, ${valTwo}, ${valThree})`);
}

// MAKES THE CORRECT RGB CODE APPEAR ONSCREEN
correctColorText.textContent = colors[correctColorIndex];


// ASSIGNS ELEMENTS OF THE COLORS ARRAY TO
// ELEMENTS OF THE SQUARES CLASS
for (var i = 0; i < 3; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].style.borderColor = colors[i];

	// WINS GAME IF PLAYER CLICKS RIGHT.
	// LOSES GAME IF PLAYER CLICKS WRONG.
	squares[i].addEventListener("click", function(){
		if (!gameOver) {
			if (this.style.backgroundColor === 
				correctColorText.textContent) {
				winOrLoseText.textContent = "You win";
			}
			else {
				winOrLoseText.textContent = "You lose";
			}

			for (var i = 0; i < 6; i++) {
					squares[i].style.backgroundColor = 
					correctColorText.textContent

			gameOver = true;
			}
		}
	})
}

// RESET BUTTON SCRIPT
resetButton.addEventListener("mouseover", function(){
	this.style.backgroundColor = "rgba(220, 220, 220, 1)";
})

resetButton.addEventListener("mouseout", function(){
	this.style.backgroundColor = "rgba(100, 100, 220, 1)";
})

resetButton.addEventListener("click", function(){
	location.reload();
})


// EASY BUTTON SCRIPT
hardButton.addEventListener("mouseover", function(){
	this.style.backgroundColor = "rgba(220, 220, 220, 1)";
})

hardButton.addEventListener("mouseout", function(){
	this.style.backgroundColor = "rgba(100, 100, 220, 1)";
})

hardButton.addEventListener("click", function(){
	window.location.href = "index.html";
})