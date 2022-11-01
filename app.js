/*
1- creat a list with choices which computer will choose between
2- creat a thing order usr to enter a choice 
3- creat a function which make computer choose randomly from the list in step (1)
4- creat a function compare between user choice and computer choice which identfy who will win the game
 */

//step (1)
let choicesList = ["scissors", "paper", "rock"];
console.log(choicesList)

//step (2)
let userChoice = prompt("enter your choice please: ");
console.log(userChoice)


//step (3)
function computerSelectChoice() {
    return Math.floor(Math.random() * choicesList.length);
}
console.log(computerSelectChoice())


let computerChoice = choicesList[computerSelectChoice()];
console.log(computerChoice);



//step (4)

function comparison(userChoice, computerChoice) {
    switch (true) {
        case userChoice == computerChoice:
            console.log("this is a tie");
            break;
        case userChoice == "rock" && computerChoice == "scissors":
        case userChoice == "scissors" && computerChoice == "paper":
        case userChoice == "paper" && computerChoice == "rock":
            console.log(`you win the ${userChoice} beat the ${computerChoice}`);
            break;
        default:
            console.log(`you lose the game ${computerChoice} beat the ${userChoice}`);
            break;
    }
}

console.log(comparison(userChoice, computerChoice));
