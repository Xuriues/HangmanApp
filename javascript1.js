// JavaScript Document
var currentWord = []; 
var currIndex; //Index of word e.g Shallow = 0 as it is the first word in the array box
var words = []; // Array that contains words 
var fails = 0;
var score = 0;
var count = 0;
var usedKey = "";
var arraySize = 0;
var wrongKey = "";
var flag = false; 
function addwords(word){ // Adds a word to var words
	words.push(word)
}
function initWords() { // Adding words to array
	addwords("Yawn");
	addwords("To");
	addwords("Kon");
}
function getword(){ // Making it Random
	currIndex = Math.floor(Math.random()*words.length);
	
	
}
function setCurrentword() { 
	getword(); //Trigger function to random
	currentWord = []; // setting it empty
	usedKey = ""; //Reset the keys to empty 
	wrongKey = ""
	count = 0; //Reset index count
	for(var x=0; x<=words[currIndex].length-1; x++ ){ //To _
		currentWord.push("_");
	}
	document.getElementById("title").value = "";
	document.getElementById("click").value = ""; 
	for(var y=0;y<=currentWord.length-1;y++){ 
		document.getElementById("title").value += currentWord[y]+" ";
	}
}

function reveal(key) { //This function enables it to find the position for the letters when clicked on 
	var temp = "";
	var checkCount = false; //checking key value 
	for(var x=0; x< words[currIndex].length	;x++){
		if(words[currIndex].charAt(x).toUpperCase() == key.toUpperCase()){ //E.g Shallow S is 0 h is 1 
			currentWord[x] = key;
			count++;
			checkCount = true;
			document.getElementById("title").value = ""; //Reset
			
			for(var y=0;y<=currentWord.length-1;y++){ // Turning all the letters to underscore e.g Shallow has 7 words so 7 "_"
				document.getElementById("title").value += currentWord[y]+" ";
			}
		}
	}
	if(checkCount == false){
		if(fails == 5){
			//RESTART
			flag = true ;
			fails = 0;
			score = 0;
		}	
		else{
			fails++;
			wrongKey += key;
			document.getElementById("click").value = wrongKey;
		}
	}
	if(count == currentWord.length){
		temp = words[words.length-1]; //set to last index 
		words[words.length-1] = words[currIndex]; //setting last index as currindex
		words[currIndex] = temp; //setting currindex as last index
		words.pop(); //pop deletes last index]
		score++; 
		document.getElementById("score").value = score;
		//alert(words.length)
		if(words.length == 0){
			flag = true;
		}
		return true;
	}
	else{
		document.getElementById("fail").value = fails;
		return false;
	}
	
}

function Key(key){
	//alert(usedKey + usedKey.includes(key));
	var displayTxt = "Click Start for a word"
	if(!usedKey.includes(key)){ //Recheck used keys so it won't duplicate 
		var temp = reveal(key);
		usedKey += key;
		document.getElementById("click").value = wrongKey ; 
		if(!flag){
			if(temp){ //It willl run a new word 
				setCurrentword()
			}
		}
		else{
			if(score==arraySize){
				displayTxt ="You have completed the game, click start to begin again" ; 
			}
			else{
				displayTxt = "You have failed, please try again"
			}
			alert(displayTxt);
			fails = 0;
			usedKey = 0;
			score = 0;
			document.getElementById("title").value = "---Hangman---"
			document.getElementById("click").value = "Click start for new word" ; 
			document.getElementById("score").value = score ;
			document.getElementById("fail").value = fails;
	
		}
	}

}
function setQuestion(btn){
	words = [];
	document.getElementById("click").value = "";
	flag = false;
	initWords(); // Adding words to array 
	arraySize = words.length;
	setCurrentword();
	fails = 0;
	score = 0;
	document.getElementById("score").value = score;
	document.getElementById("fail").value = fails;
}

