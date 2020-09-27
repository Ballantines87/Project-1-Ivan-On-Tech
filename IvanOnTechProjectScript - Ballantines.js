
//--------------------


//ROCK, PAPER, SCISSORS

/*
function rockPaperScissors() {

    let playerName = prompt("What's your name?")
    let choice = prompt(`Hello ${playerName}. Welcome to the Rock, Paper, Scissors Game! Choose Rock (r), Paper (p) or Scissors (s)`);
    let randomRPS = Math.random();

        if(randomRPS < 0,33)
            randomRPS = "r";
        else if(randomRPS < 0,66)
            randomRPS = "p";
        else if (randomRPS < 1) 
            randomRPS = "s";
    
    let choiceAndRandomRPS = (choice + randomRPS).toLowerCase();
    
    switch(choiceAndRandomRPS) {
        case ("rr"):
        case ("pp"):
        case ("ss"):
            console.log("It's a TIE! ");
            break;
    
        case ("rs"):
        case ("sp"):
        case ("pr"):
            console.log("Congatulations! You WON! ");
            break;    
    
        case ("sr"):
        case ("ps"):
        case ("rp"):
            console.log("You LOST! ");
            break;    
    
    }
}

rockPaperScissors();

*/




//-----------------

// COUNTDOWN CLOCK


/* let timerSixty = 60;

let timerStart = function timer() {
    timerSixty--;
    console.log("Time Left: " + timerSixty.toString());
    
    if (timerSixty <= 0) {          // stops the countdown upon reaching 0
        console.log("Time is UP!");
        clearInterval(timerFunc);   
    }
}

let timerFunc = setInterval(timerStart, 1000);
timerStart(); 
*/





//TIPS CALCULATOR

/* 
function tipsCalc(val, tipDecimal) {

    let value = val;
    let tip = value*tipDecimal;

    console.log("You will receive " + tip + " dollars as tip");
}



---------------------- */



//CALCULATOR

/* 
let total;

let operation = prompt("Please type the expression you want to do");
total = eval(operation);

console.log("The result of your operation is " + total); 
*/

