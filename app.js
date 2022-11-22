//styling ======>
// info card styling => hide and appear (info-icon, info)

let info = document.getElementById("info");
let infoIcon = document.getElementById("info-icon");
let closeIcon = document.getElementById("close-icon");

infoIcon.onclick = function () {
    info.style.cssText = "width: 400px; padding: 10px; padding-top: 29px;content-visibility: visible;"
    infoIcon.style.display = "none";

}

closeIcon.onclick = function () {
    info.style.cssText = "width: 0; padding: 0; padding-top: 0;";
    infoIcon.style.display = "block";
}


//program game it self ====>
// 1- creat a list with choices which computer will choose between
// 2- creat a function which make computer choose randomly from the list in step (1)
// 3- add eventListener to the THREE BUTTONS
// 4- creat a function compare between user choice and computer choice which identfy who will win the game

let choicesList = ["rock", "paper", "scissors"];
let buttons = document.getElementsByTagName("button");
let result = document.getElementById("result");
let uChoice = document.getElementById("u-choice");
let cChoice = document.getElementById("c-choice")


function choicing() {
    for (const button of buttons) {
        //add eventListener to the THREE BUTTONS
        button.onclick = function () {
            console.log(button.value)
            function computerChoiceNum() {
                return Math.floor(Math.random() * choicesList.length);
            }
            /*save computer choice in a variable to make sure that computerChoiceNum() 
            doesn't change its return value every time it's invoked */
            let computerChoice = choicesList[computerChoiceNum()];
            console.log(computerChoice)
            switch (true) {
                case computerChoice === button.value:
                    uChoice.textContent = button.value;
                    uChoice.style.cssText = " animation-play-state: paused;font-size: 3rem; color:#1d3557;"
                    cChoice.textContent = computerChoice;
                    cChoice.style.cssText = "font-size:3rem ; color: #1d3557;"
                    return result.textContent = "It's a tie"
                    break;
                case button.value === "rock" && computerChoice === "scissors":
                case button.value === "scissors" && computerChoice === "paper":
                case button.value === "paper" && computerChoice === "rock":
                    uChoice.textContent = button.value;
                    uChoice.style.cssText = " animation-play-state: paused;font-size: 3rem; color: #1d3557;"
                    cChoice.textContent = computerChoice;
                    cChoice.style.cssText = "font-size: 3rem ; color: red;"
                    return result.textContent = `you win the game your ${button.value} beats the computer's ${computerChoice}`
                    break;
                default:
                    uChoice.textContent = button.value;
                    uChoice.style.cssText = "animation-play-state: paused;font-size: 3rem; ";
                    cChoice.textContent = computerChoice;
                    cChoice.style.cssText = "font-size: 3rem; color: #1d3557;"
                    return result.textContent = `you lose the game the computer's ${computerChoice} beats your ${button.value}`
                    break;
            }

        }
    }
}

choicing()
