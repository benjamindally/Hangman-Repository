var possibleWords = ["Goldfinger"]
//, "Jaws", "Dr. No", "Oddjob", "Spectre", "SMERSH", "Goldeneye"] //array with possible words that users will guess
var displayWord;
var numberOfGuess = 0;
var numberCorrect = 0;


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


	function goldfingerGame(){
	
		var userGuess = "";
		var printWord = [];

			//loop through the displayed word in order to find the number of the correct blank spaces to be displayed
		for (i = 0; i < displayWord.length; i++){
		 	printWord[i] = "_";
		}

		var remainingLetter = displayWord.length;
		console.log(remainingLetter);

		//display the blank spaces on the page
		document.getElementById('word_to_guess').innerHTML = printWord.join(" ");

		//add a function that accepts user's key press
		document.onkeyup = function (event){
			var userGuess1 = event.key; //finds userinput
			var userGuess2 = /^[A-Za-z]$/;//creates array to test key against to make sure non-letters are not displayed

			//tests user input against regex array to make sure incorrect non-letters are not displayed
			if (userGuess2.test(userGuess1)){
			document.getElementById('letter_guessed').innerHTML += " " + userGuess1; //displays keys pressed
			console.log(userGuess1);
			}else{
				return;
			}

			document.getElementById('incorrect_guessed').innerHTML = numberOfGuess; //displays number of incorrect guesses			


			//places letters into correct spaces on screen
			if (printWord[0] === "_" && userGuess1 === "g" || printWord[0] === "_" && userGuess1 === "G"){
				printWord[0] = "G";
				printWord[7] = "g";
				remainingLetter--;
				remainingLetter--;
			}
			else if (printWord[1] === "_" && userGuess1 === "o" || printWord[1] === "_" && userGuess1 === "O"){
				printWord[1] = "o";
				remainingLetter--;
			}
			else if (printWord[2] === "_" && userGuess1 === "l" || printWord[2] === "_" && userGuess1 === "L"){
				printWord[2] = "l";
				remainingLetter--;
			}
			else if (printWord[3] === "_" && userGuess1 === "d" || printWord[3] === "_" && userGuess1 === "D"){
				printWord[3] = "d";
				remainingLetter--;
			}
			else if (printWord[4] === "_" && userGuess1 === "f" || printWord[4] === "_" && userGuess1 === "F"){
				printWord[4] = "f";
				remainingLetter--;
			}
			else if (printWord[5] === "_" && userGuess1 === "i" || printWord[5] === "_" && userGuess1 === "I"){
				printWord[5] = "i";
				remainingLetter--;
			}
			else if (printWord[6] === "_" && userGuess1 === "n" || printWord[6] === "_" && userGuess1 === "N"){
				printWord[6] = "n";	
				remainingLetter--;
			}
			else if (printWord[8] === "_" && userGuess1 === "e" || printWord[8] === "_" && userGuess1 === "E"){
				printWord[8] = "e";
				remainingLetter--;
			}
			else if (printWord[9] === "_" && userGuess1 === "r" || printWord[9] === "_" && userGuess1 === "R"){
				printWord[9] = "r";
				remainingLetter--;
			}
			
			console.log(remainingLetter);


		//create a variable for the div that will display the result
		document.getElementById('word_to_guess').innerHTML = printWord.join(" ");

		//alert user that they won and reload the page for a new word
		document.getElementById('correct_guessed').innerHTML = remainingLetter;
			if (printWord[0] === "G" && printWord[1] === "o" && printWord[2] === "l" && printWord[3] === "d" && printWord[4] ===  "f" && printWord[5] ===  "i" && printWord[6] ===  "n" && printWord[7] ===  "g" && printWord[8] ===  "e" && printWord[9] ===  "r"){
				alert("Mission Accomplished. Time for a martini, 007.");
				location.reload();
				return;
			}
		}

	}

}

