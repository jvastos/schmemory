//Functions used to create a different sequence of cards everytime the game is restarted (otherwise it would be really boring).
export function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
}

//Function to remove the "flipped" class from the NodeList with all elements that have been flipped.
export function removeFlippedClass(elements) {
    elements.forEach(element => {
        setTimeout(() => { //the time out gives a better experience to the player. Otherwise the player wouldn't be able to even see the figure when the second card flipped.
            element.classList.remove("flipped");
        }, 1000); 
    });;
}

//Function to remove the "under-check" class from the NodeList with all elements the are under check.
export function removeUnderCheckClass(elements) {
    elements.forEach(element => {
        setTimeout(() => {
            element.classList.remove("under-check");
        }, 1000); 
    });;
}

//Function to add the class "flipped" and cause the visual effect of the card flipping.
export function flipCard(card) {
    card.classList.add('flipped');
}