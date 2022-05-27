const element = {
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
};

//Variables to capture minutes and seconds to be used in the timer.
export let minutes = 0;
export let seconds = 0;

element.minutes.innerHTML = minutes;
element.seconds.innerHTML = seconds;

//Interval to count minutes.
export const minutesInterval = setInterval(() => {
  minutes++;
  element.minutes.innerHTML = minutes;
  seconds = 0;
}, 60000);

//Interval to count seconds.
export const secondsInterval = setInterval(() => {
  seconds++;
  element.seconds.innerHTML = seconds;
}, 1000);

//Function to get both intervals started at the same time.
export function startTimer() {
  minutesInterval;
  secondsInterval;
}
