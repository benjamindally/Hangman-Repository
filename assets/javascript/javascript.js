var possibleWords = ["Goldfinger", "Jaws", "Dr. No", "Oddjob", "Spectre", "SMERSH", "Goldeneye"] //array with possible words that users will guess
var displayWord;

//alert("Press any Key To Get Started")//not actually needed but it's in the homework instructions so here it is

//this funciton will run after the page loads and output a random word from the above defined array and initiate the a funciton dependent on that random word
window.onload = function randomizer(){
	var themeMusic = document.getElementById('load_sound');
	themeMusic.play();
	var displayWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
	console.log(displayWord);
		if (displayWord === "Goldfinger"){
			goldfingerGame();
			return;
		}
		else if (displayWord === "Jaws"){
			jawsGame();
			return;
		}
		else if (displayWord === "Dr. No"){
			drNoGame();
			return;
		}
		else if (displayWord === "Oddjob"){
			oddjobGame();
			return;
		}
		else if (displayWord === "Spectre"){
			spectreGame();
			return;
		}
		else if (displayWord === "SMERSH"){
			smershGame();
			return;
		}
		else if (displayWord === "Goldeneye"){
			goldeneyeGame();
			return;
		}

	function goldfingerGame(){
		var userGuess = "";//creates a space for the userGuess to be later input
		var printWord = [];//creates a blank array to write to 
		var remainingLetter = displayWord.length;//creates a variable to conrol the displaying of # of correct guesses
		var incorrectCounter = 0;//starts a counter for tracking incorrect guesses

			//loop through the displayed word in order to find the number of the correct blank spaces to be displayed
		for (i = 0; i < displayWord.length; i++){
		 	printWord[i] = "_";
		}

		//display the blank spaces on the page
		document.getElementById('word_to_guess').innerHTML = printWord.join(" ");

		//add a function that accepts user's key press and initiates a series of acivities 
		document.onkeyup = function (event){
			var userGuess1 = event.key; //finds userinput
			var userGuess2 = /^[A-Za-z]$/;//creates array to test key against to make sure non-letters are not displayed
			var userGuess3 = /[^/g/o/l/d/f/i/n/e/r/G/O/L/D/F/I/N/E/R]$/;//creates array to test key against to make sure non-letters are not displayed
			var winningSound = document.getElementById('winning_sound');//creates a variable to add in sound when game has been completed successfully
			
			//tests user input against regex array to make sure incorrect non-letters are not displayed
			if (userGuess2.test(userGuess1) && userGuess3.test(userGuess1)){
			document.getElementById('letter_guessed').innerHTML += " " + userGuess1; //displays keys pressed
			incorrectCounter++;
			}

			//displays number of incorrect guesses			
			document.getElementById('incorrect_guessed').innerHTML = "00" + incorrectCounter; 

			//sets an upper limit to the incorrect number of guesses when 8 is reached
			if (incorrectCounter === 8){
				alert("Report back to HQ, 007.")
				location.reload();
				return;
			}

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
			
		//create a variable for the div that will display the result
		document.getElementById('word_to_guess').innerHTML = printWord.join(" ");

		//alert user that they won and reload the page for a new word
		document.getElementById('correct_guessed').innerHTML = remainingLetter;
			if (printWord[0] === "G" && printWord[1] === "o" && printWord[2] === "l" && printWord[3] === "d" && printWord[4] ===  "f" && printWord[5] ===  "i" && printWord[6] ===  "n" && printWord[7] ===  "g" && printWord[8] ===  "e" && printWord[9] ===  "r"){
				themeMusic.pause();
				winningSound.play();
				alert("Mission Accomplished. Time for a martini, 007.");
				location.reload();
				return;
			}
		}

	}

	function jawsGame(){
			var userGuess = "";//creates a space for the userGuess to be later input
			var printWord = [];//creates a blank array to write to 
			var remainingLetter = displayWord.length;//creates a variable to conrol the displaying of # of correct guesses
			var incorrectCounter = 0;//starts a counter for tracking incorrect guesses

				//loop through the displayed word in order to find the number of the correct blank spaces to be displayed
			for (i = 0; i < displayWord.length; i++){
			 	printWord[i] = "_";
			}

			//display the blank spaces on the page
			document.getElementById('word_to_guess').innerHTML = printWord.join(" ");

			//add a function that accepts user's key press and initiates a series of acivities 
			document.onkeyup = function (event){
				var userGuess1 = event.key; //finds userinput
				var userGuess2 = /^[A-Za-z]$/;//creates array to test key against to make sure non-letters are not displayed
				var userGuess3 = /[^/j/a/w/s/J/A/W/S]$/;//creates array to test key against to make sure non-letters are not displayed
				var winningSound = document.getElementById('winning_sound');//creates a variable to add in sound when game has been completed successfully
				
				//tests user input against regex array to make sure incorrect non-letters are not displayed
				if (userGuess2.test(userGuess1) && userGuess3.test(userGuess1)){
				document.getElementById('letter_guessed').innerHTML += " " + userGuess1; //displays keys pressed
				incorrectCounter++;
				}

				//displays number of incorrect guesses			
				document.getElementById('incorrect_guessed').innerHTML = "00" + incorrectCounter; 

				//sets an upper limit to the incorrect number of guesses when 8 is reached
				if (incorrectCounter === 8){
					alert("Report back to HQ, 007.")
					location.reload();
					return;
				}

				//places letters into correct spaces on screen
				if (printWord[0] === "_" && userGuess1 === "j" || printWord[0] === "_" && userGuess1 === "J"){
					printWord[0] = "J";
					remainingLetter--;
				}
				else if (printWord[1] === "_" && userGuess1 === "a" || printWord[1] === "_" && userGuess1 === "A"){
					printWord[1] = "a";
					remainingLetter--;
				}
				else if (printWord[2] === "_" && userGuess1 === "w" || printWord[2] === "_" && userGuess1 === "W"){
					printWord[2] = "w";
					remainingLetter--;
				}
				else if (printWord[3] === "_" && userGuess1 === "s" || printWord[3] === "_" && userGuess1 === "S"){
					printWord[3] = "s";
					remainingLetter--;
				}
				
			//create a variable for the div that will display the result
			document.getElementById('word_to_guess').innerHTML = printWord.join(" ");

			//alert user that they won and reload the page for a new word
			document.getElementById('correct_guessed').innerHTML = remainingLetter;
				if (printWord[0] === "J" && printWord[1] === "a" && printWord[2] === "w" && printWord[3] === "s"){
					themeMusic.pause();
					winningSound.play();
					alert("Mission Accomplished. Time for a martini, 007.");
					location.reload();
					return;
				}
			}
		}
		
function drNoGame(){
			var userGuess = "";//creates a space for the userGuess to be later input
			var printWord = [];//creates a blank array to write to 
			var remainingLetter = (displayWord.length - 2);//creates a variable to conrol the displaying of # of correct guesses
			var incorrectCounter = 0;//starts a counter for tracking incorrect guesses

				//loop through the displayed word in order to find the number of the correct blank spaces to be displayed
			for (i = 0; i < displayWord.length; i++){
			 	printWord[i] = "_";
			}

			printWord[2] = ".";
			printWord[3] = "&nbsp;";
			//display the blank spaces on the page
			document.getElementById('word_to_guess').innerHTML = printWord.join(" ");

			//add a function that accepts user's key press and initiates a series of acivities 
			document.onkeyup = function (event){
				var userGuess1 = event.key; //finds userinput
				var userGuess2 = /^[A-Za-z]$/;//creates array to test key against to make sure non-letters are not displayed
				var userGuess3 = /[^/d/r/n/o/D/R/N/O]$/;//creates array to test key against to make sure non-letters are not displayed
				var winningSound = document.getElementById('winning_sound');//creates a variable to add in sound when game has been completed successfully
				
				//tests user input against regex array to make sure incorrect non-letters are not displayed
				if (userGuess2.test(userGuess1) && userGuess3.test(userGuess1)){
				document.getElementById('letter_guessed').innerHTML += " " + userGuess1; //displays keys pressed
				incorrectCounter++;
				}

				//displays number of incorrect guesses			
				document.getElementById('incorrect_guessed').innerHTML = "00" + incorrectCounter; 

				//sets an upper limit to the incorrect number of guesses when 8 is reached
				if (incorrectCounter === 8){
					alert("Report back to HQ, 007.")
					location.reload();
					return;
				}

				//places letters into correct spaces on screen
				if (printWord[0] === "_" && userGuess1 === "d" || printWord[0] === "_" && userGuess1 === "D"){
					printWord[0] = "D";
					remainingLetter--;
				}
				else if (printWord[1] === "_" && userGuess1 === "r" || printWord[1] === "_" && userGuess1 === "R"){
					printWord[1] = "r";
					remainingLetter--;
				}
				else if (printWord[4] === "_" && userGuess1 === "n" || printWord[2] === "_" && userGuess1 === "N"){
					printWord[4] = "N";
					remainingLetter--;
				}
				else if (printWord[5] === "_" && userGuess1 === "o" || printWord[3] === "_" && userGuess1 === "O"){
					printWord[5] = "o";
					remainingLetter--;
				}
				
			//create a variable for the div that will display the result
			document.getElementById('word_to_guess').innerHTML = printWord.join(" ");

			//alert user that they won and reload the page for a new word
			document.getElementById('correct_guessed').innerHTML = remainingLetter;
				if (printWord[0] === "D" && printWord[1] === "r" && printWord[4] === "N" && printWord[5] === "o"){
					themeMusic.pause();
					winningSound.play();
					alert("Mission Accomplished. Time for a martini, 007.");
					location.reload();
					return;
				}
			}

		}
}

