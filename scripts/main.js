import { shuffleArray, removeFlippedClass, removeUnderCheckClass, flipCard } from "./modules/helper.js";
import { showModal, hideModal } from "./modules/modal.js";
import { minutesInterval, secondsInterval, startTimer, minutes, seconds } from "./modules/timer.js";

startTimer();

//Main array holidng all the images to the cards.
const emojis = ["🥝", "🍓", "🍋", "🥭", "🍈" , "🍊", "🍍", "🍑", "🥝", "🍓", "🍋", "🥭", "🍈", "🍊", "🍍", "🍑"];

const element = {
    movesCounter: document.getElementById("moves-counter"),
    fruitsSection: document.querySelector("#cards"),
}

//Variable to be used as a buffer to perform the check of the two card currently flipped.
let currentCards = [];



//Variable to keep track of how many attempts the player has done so far. 1 attemp = 1 pair flipped (matching or not matching).
let moves = 0;
element.movesCounter.innerHTML = moves;

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
    shuffleArray(emojis);
    element.fruitsSection.innerHTML = createCards();
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

document.addEventListener("click", (e) => {
    let target = e.target;
    if(target.id === "modal") {
        hideModal();
    }
})


//Event listener to close the modal
document.addEventListener("click", (e) => {
    let target = e.target;
    if(target.id === "modal") {
        hideModal();
    }
})

function updateMovesCounter() {
    moves++;
    element.movesCounter.innerHTML = moves;
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

//Interval to watch if the game should be finished. That happens when all the cards are flipped.
const finishGameInterval = setInterval(() => {
    const allFlippedCards = document.querySelectorAll(".flipped"); //Grabbing all the flipped cards.
    const numberOfFlippedCards = allFlippedCards.length //Counting how many flipped cards exist.
    if (numberOfFlippedCards === 16) {
        clearInterval(minutesInterval); //Stopping the clock.
        clearInterval(secondsInterval); //Stopping the clock.
        let time = `${minutes}'${seconds}"`; //Capturing where the clock stopped.
        console.log(moves,time) // A possible output for the result/DB.
        showModal(moves, time);
        clearInterval(finishGameInterval); //Stopping this very interval.
    }
}, 100)