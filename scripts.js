//Main array holidng all the images to the cards
const emojis = ["🥝", "🍓", "🍋", "🥭", "🍈" , "🍊", "🍍", "🍑", "🥝", "🍓", "🍋", "🥭", "🍈", "🍊", "🍍", "🍑"];

//Variable to be used as a buffer to perform the check of the two card currently flipped
let currentCards = [];

let moves = 0;
document.getElementById("moves-counter").innerHTML = moves;

let fruitsSection = document.querySelector("#cards");

//Functions used to create a different sequence of cards everytime the game is restarted (otherwise it would be reallu boring)
function shuffleFruits() {
    emojis.sort(() => Math.random() - 0.5);
}

//Function to create the content to populate the main board of the game with the figures in the "emojis" array
function createCards(){
    let cards = emojis.map(i => 
        `<div class="card">
            <div class="card-front"></div>
            <div class="card-back">${i}</div>
        </div>
            `)
    return cards.join('');
}

//Function to effectively populate the main board of the game 
function injectFruits() {
    shuffleFruits();
    fruitsSection.innerHTML = createCards();
}
injectFruits();

//Function to add the class "flipped" and cause the visual effect of the card flipping
function flipCard(card) {
    card.classList.add('flipped');
}

//Event listener triggered every time a card is clicked. It's performs checks to make sure the card still needs to be flipped among other things.
document.addEventListener("click", (e) => {
    let target = e.target
    
    if (target.className.includes('card-front') && !target.parentElement.className.includes('flipped')) {
        flipCard(target.parentElement); // call to the function that actually adds the "flipped" class to the card and triggers the visual effect programmed in the css
        target.parentElement.classList.add("under-check"); //adding a temporary class to make it easier to track and remove other classes later on
        currentCards.push(target.nextElementSibling.innerHTML);
        console.log(currentCards);
}})

//Function to remove the "flipped" class from the NodeList with all elements the have been flipped.
function removeFlippedClass(elements) {
    elements.forEach(element => {
        setTimeout(() => { //the time out gives a better experience to the player. Otherwise the player wouldn't be able to even see the figure in the second card flipped
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

let minutes = 0;
let seconds = 0;


document.getElementById("minutes").innerHTML = minutes
document.getElementById("minutes").innerHTML = seconds

const minutesInterval = setInterval(() => {
    minutes++;
    document.getElementById("minutes").innerHTML = minutes
    seconds = 0;
}, 60000);

const secondsInterval = setInterval(() => {
    seconds++;
    document.getElementById("seconds").innerHTML = seconds
}, 1000);

const finishGameInterval = setInterval(() => {
    const allFlippedCards = document.querySelectorAll(".flipped");
    const numberOfFlippedCards = allFlippedCards.length
    if (numberOfFlippedCards === 16) {
        clearInterval(minutesInterval);
        clearInterval(secondsInterval);
        let time = `${minutes}.${seconds}`;
        console.log(moves,time)
        clearInterval(finishGameInterval);
    }
}, 100)