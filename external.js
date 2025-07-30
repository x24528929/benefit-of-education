//external js fileCreatedDate
//functions to manipulate the DOM on the home page
function stat1(){
	document.getElementById('text1').innerHTML = "88% reported that college significantly contributed to their personal growth. <br>" +  "85% said it helped them understand their career goals. <br>" +  "72% indicated it improved their ability to secure a meaningful job.";
}

function stat2(){
	document.getElementById('text2').innerHTML = "Overall employment rates are 88% for people with bacherlor's or above compared to 72% for those below post seconday level <br>" +"Workers with professional occupation earn median hourly wages of €33/hour, conmpared to €14/hour <br>" + "Degree holders in Ireland earn 81% more than those with only secondary education";
}

function stat3(){
	document.getElementById('text3').innerHTML = "Nations that increased average schooling by 1 year saw an incredible GDP growth increase by 0.37% per year<br>"+"Eah extra year of schooling raises a person's income by an average of 10%<br>"+"If every student in low-income nations finished school with basice reading skills, 171 million people could escape extreme povery";
}

//functions to manipulate the DOM on the contact page
function bookAA1(){
	document.getElementById('aa1').innerHTML = "•Meditations";
}

function bookAA2(){
	document.getElementById('aa2').innerHTML = "•The Republic";
}

function bookAA3(){
	document.getElementById('aa3').innerHTML = "•Letters to Lucilius";
}

function bookAA4(){
	document.getElementById('aa4').innerHTML = "•The Illiad and the Odyssey";
}

function bookMA1(){
	document.getElementById('ma1').innerHTML = "•War and Peace";
}

function bookMA2(){
	document.getElementById('ma2').innerHTML = "•Ulysses";
}

function bookMA3(){
	document.getElementById('ma3').innerHTML = "•The Great Gatsby";
}

function bookMA4(){
	document.getElementById('ma4').innerHTML = "•Macbeth";
}

//functions to manipulate the DOM on gallery, changing image to text and then on mouse out back to old image


function setNewText1(){
	document.getElementById("debate").src = "malcom.jpg";
}

function setOldIMG1(){
	document.getElementById("debate").src = "debate.jpg";
}

function setNewText2(){
	document.getElementById("father").src = "family.jpg";
}

function setOldIMG2(){
	document.getElementById("father").src = "father.jpg";
}

//function for minigame
function checkGuess(){
	let randomNumber = Math.floor(Math.random()*10) +1;
	const userGuess = parseInt(document.getElementById("guess").value);
	
	if(userGuess == randomNumber){
		alert("Correct you guessed the right number!");
	}
	else {
		alert("Incorrect, you guessed the wrong number! The right number was " + randomNumber);
	}
}

//function to change image to text on about page
function changeIMG(){
	document.getElementById("img1Container").innerHTML = "Communities can give people a sense of belonging. \n It also gives people a support system, so you can rely on someone. \n People in communities often share their knowledge, wisdom and experiences hoping to help others. \n They also give you a wide range of diverse perspectives.";
}









//mini game use math.random to generate random number, have user input number into prompt box and then compare to see if value is correct, if incorrect show the correct number
