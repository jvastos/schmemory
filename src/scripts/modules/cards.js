import { shuffleArray } from './helper.js';

const fruitsSection = document.querySelector('#cards');

//Function to effectively populate the main board of the game.
export function injectFruits(array) {
	shuffleArray(array);
	fruitsSection.innerHTML = createCards(array);
}

//Function to create the content to populate the main board of the game with the figures in the "emojis" array.
export function createCards(array) {
	let cards = array.map(
		(i) =>
			`
            <div class="card">
                <div class="card-front"></div>
                <div class="card-back">${i}</div>
            </div>
            `
	);
	return cards.join('');
}
