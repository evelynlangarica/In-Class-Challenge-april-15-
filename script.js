//Question 1: 

let userInput = prompt("Choose one of the following : 1. Deposit Money or 2.Withdraw Money ");

//Question 2 :
if (userInput == 1) {
    console.log("How much would you like to deposit?")
    alert("Your new balance is: ")
}
else if (userInput == 2) {
    console.log("How much would you like to withdraw?.")
    alert("Your new balance is:")
}

//Question 3.
const number = parseInt(prompt("What's your balance? "));


if (number > 0) {
    console.log("You got monnneeeyy!!");
}


else if (number <= 0) {
    console.log("Low Funds");
}

