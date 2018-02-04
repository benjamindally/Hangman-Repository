var possibleWords = ["Goldfinger", "Jaws", "Dr. No", "Oddjob", "Spectre", "SMERSH", "Goldeneye"] //array with possible words that users will guess
var displayWord;


//alert("Press any Key To Get Started")//not actually needed but it's in the homework instructions so here it is

//this funciton will run after the page loads and output a random word from the above defined array and initiate the a funciton dependent on that random word
window.onload = function randomizer(){
	var displayWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
	console.log(displayWord);
		if (displayWord === "Goldfinger"){
			goldfingerGame();
			return;
		}
		// else if (displayWord === "Jaws"){
		// 	jawsGame();
		// 	return;
		// }
		// else if (displayWord === "Dr. No"){
		// 	drNoGame();
		// 	return;
		// }
		// else if (displayWord === "Oddjob"){
		// 	oddjobGame();
		// 	return;
		// }
		// else if (displayWord === "Spectre"){
		// 	spectreGame();
		// 	return;
		// }
		// else if (displayWord === "SMERSH"){
		// 	smershGame();
		// 	return;
		// }
		// else if (displayWord === "Goldeneye"){
		// 	goldeneyeGame();
		// 	return;
		// }
}

function goldfingerGame(){
	//add a function that accepts user's key press
	document.onkeyup = function (event){
		var userGuess = event.key;
	}
	//create a variable for the div that will display the result
	var wordSelected  = document.getElementById('word_to_guess');

	for (i = 0; i < possibleWords.length; i++){
		wordSelected[i] = "_";
	}

	// if (userGuess === "G" || "g"){
	// 	document.getElementById('word_to_guess').innerHTML
	// }
}



