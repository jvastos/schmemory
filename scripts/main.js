import { shuffleArray, removeFlippedClass, removeUnderCheckClass, flipCard } from "./modules/helper.js";
import { showModal, hideModal } from "./modules/modal.js";
import { minutesInterval, secondsInterval, startTimer, minutes, seconds } from "./modules/timer.js";

startTimer();

//Main array holidng all the images to the cards.
const emojis = ["🥝", "🍓", "🍋", "🥭", "🍈" , "🍊", "🍍", "🍑", "🥝", "🍓", "🍋", "🥭", "🍈", "🍊", "🍍", "🍑"];

<<<<<<< Updated upstream:scripts.js
=======
const element = {
    movesCounter: document.getElementById("moves-counter"),
    fruitsSection: document.querySelector("#cards"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
}

>>>>>>> Stashed changes:scripts/main.js
//Variable to be used as a buffer to perform the check of the two card currently flipped.
let currentCards = [];

//Variable to keep track of how many attempts the player has done so far. 1 attemp = 1 pair flipped (matching or not matching).
let moves = 0;
document.getElementById("moves-counter").innerHTML = moves;

let fruitsSection = document.querySelector("#cards");

//Function to create the content to populate the main board of the game with the figures in the "emojis" array.
function createCards(){
    let cards = emojis.map(i => 
        `<div class="card">
            <div class="card-front"></div>
            <div class="card-back">${i}</div>
        </div>
            `)
    return cards.join('');
}

//Function to effectively populate the main board of the game.
function injectFruits() {
<<<<<<< Updated upstream:scripts.js
    shuffleFruits();
    fruitsSection.innerHTML = createCards();
=======
    shuffleArray(emojis);
    element.fruitsSection.innerHTML = createCards();
>>>>>>> Stashed changes:scripts/main.js
}
injectFruits();

//Event listener triggered every time a card is clicked. It performs checks to make sure the card still needs to be flipped among other things.
document.addEventListener("click", (e) => {
    let target = e.target
    
    if (target.className.includes('card-front') && !target.parentElement.className.includes('flipped')) {
        flipCard(target.parentElement); // call to the function that actually adds the "flipped" class to the card and triggers the visual effect programmed in the css.
        target.parentElement.classList.add("under-check"); //adding a temporary class to make it easier to track and remove other classes later on.
        currentCards.push(target.nextElementSibling.innerHTML);
        console.log(currentCards);
}})

<<<<<<< Updated upstream:scripts.js
//Function to remove the "flipped" class from the NodeList with all elements the have been flipped.
function removeFlippedClass(elements) {
    elements.forEach(element => {
        setTimeout(() => { //the time out gives a better experience to the player. Otherwise the player wouldn't be able to even see the figure in the second card flipped.
            element.classList.remove("flipped");
        }, 1000); 
    });;
}

//Function to remove the "under-check" class from the NodeList with all elements the are under check.
function removeUnderCheckClass(elements) {
    elements.forEach(element => {
        setTimeout(() => {
            element.classList.remove("under-check");
        }, 1000); 
    });;
}
=======
//Event listener to close the modal
document.addEventListener("click", (e) => {
    let target = e.target;
    if(target.id === "modal") {
        hideModal();
    }
})
>>>>>>> Stashed changes:scripts/main.js

function updateMovesCounter() {
    moves++;
    document.getElementById("moves-counter").innerHTML = moves;
}

//Function to check if the two elements currently flipped are equal.
function matchCheck() {
    let underCheckElements = document.querySelectorAll(".under-check")

    if(currentCards.length === 2) {
        updateMovesCounter();

        if(currentCards[0] === currentCards[1] ) {
            currentCards = [];
            removeUnderCheckClass(underCheckElements);
            updateMovesCounter();
        } else {
            removeFlippedClass(underCheckElements);
            removeUnderCheckClass(underCheckElements);
            currentCards = [];
        }
    }
}

//Interval to constantly check if there are two elements flipped. Whene there are, the matchCheck function performs the check on the given pair of cards.
setInterval(matchCheck, 10);

<<<<<<< Updated upstream:scripts.js
//Variables to capture minutes and seconds to be used in the timer.
let minutes = 0;
let seconds = 0;

document.getElementById("minutes").innerHTML = minutes
document.getElementById("minutes").innerHTML = seconds

//Interval to count minutes
const minutesInterval = setInterval(() => {
    minutes++;
    document.getElementById("minutes").innerHTML = minutes
    seconds = 0;
}, 60000);

//Interval to count seconds
const secondsInterval = setInterval(() => {
    seconds++;
    document.getElementById("seconds").innerHTML = seconds
}, 1000);

=======
>>>>>>> Stashed changes:scripts/main.js
//Interval to watch if the game should be finished. That happens when all the cards are flipped.
const finishGameInterval = setInterval(() => {
    const allFlippedCards = document.querySelectorAll(".flipped"); //Grabbing all the flipped cards.
    const numberOfFlippedCards = allFlippedCards.length //Counting how many flipped cards exist.
    if (numberOfFlippedCards === 16) {
        clearInterval(minutesInterval); //Stopping the clock.
        clearInterval(secondsInterval); //Stopping the clock.
        let time = `${minutes}.${seconds}`; //Capturing where the clock stopped.
        console.log(moves,time) // A possible output for the result/DB.
        clearInterval(finishGameInterval); //Stopping this very interval.
    }
}, 100)