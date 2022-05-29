# Schmemory

A simple memory game made with HTML, SASS and Vanilla JS.

<img width="936" alt="Screen Shot 2022-05-25 at 17 34 18" src="https://user-images.githubusercontent.com/85259118/170306474-3f48cb85-5de6-442e-9f6e-7d145cf0a5ae.png">

## About the Project

#### Cards 🥝

1. Each of the cards is based on a Emoji. This means unicode instead of assets. (it's light and equaly good looking)
2. The cards flip with CSS animations. Using "transform" with "rotateY" and "rotateZ" and toggling a class ".flipped".
3. The tactile look and feel of the cards is done using different divs for the front and the back of the card and some help of "backface-visibility: hidden;".

#### Game mechanics 🍓

1. You have a "moves" counter keeping track of how many attempts you have done so far.
2. You have a clock ticking on you. To give a bit of that stress kick.
3. The lower both of this numbers are, the better. (see image on the top. that's my best mark so far)

#### Development key points 🍋

1. All emojis are stored in an array. Each time the game is restarted that array is shuffled using "emojis.sort(() => Math.random() - 0.5);". This makes the decision to sort as "a, b" or "b, a" a random one.
2. Each of the cards is created by Javascript interating over that shuffled array and injecting content in the HTML.
3. The timer is made with setIntervals. One for the minutes and one for the seconds.
4. The responsivness is given by using relative units. No queries.

#### Future steps 🥭

1. Improve accessibility.
2. Further improve responsiviness.
3. Further improve usability (eg. smoother animations, more instructions etc.)
4. Link with a database for persistent data and score board across players.
