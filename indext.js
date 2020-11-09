 var numOfWon =0;
 var numOflost =0;

for ( var i = 1; i<=5; i++) {
    
    var guessNumber = parseInt(prompt("Enter a number 1 to 5 :"));

    var randomNumber = Math.floor(Math.random()*5)+1;

    if (guessNumber==randomNumber ) {
        console.log("You have won");
        numOfWon++;
    }else{
        console.log("You have lost.Random nuber was " + randomNumber);
        numOflost++;
    }

}


document.write("You have won =" + numOfWon +"<br>");
document.write("You have lost =" + numOflost +"<br>" );
