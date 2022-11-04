'use strict';

/*
    Mako Starykovs'ky

    Guessing Game JavaScript
*/


// Add event listener
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

// Get HTML element by id
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

// Select HTML element by selector
function select(selector, parent = document) {
    return parent.querySelector(selector); 
}

const guess = select('.guess');
const input = select('.input');
const output = select('.output p')
const guessBtn = select('.guessBtn');
const reset = select('.reset');

var randomNum = Math.floor(Math.random() * 51);
var guessCount = 0;
console.log(randomNum);

onEvent('click', guessBtn, function() {
    let inputVal = document.getElementById('input').value;

    if (inputVal === '' || isNaN(inputVal)){
        output.innerText = 'That is not a number (or nothing was input)';        
    } else {
        if (inputVal > randomNum) {
            output.innerText = 'Lower!'
            guessCount++;
        } else if (inputVal < randomNum) {
            output.innerText = 'Higher!'
            guessCount++;
        } else {
            guessCount++;
            output.innerText = `Correct! You got it in ${guessCount} tries!`;
            guess.innerText++;
            guessBtn.style.display = 'none';
            reset.style.display = 'initial';
        }
    }
});

onEvent('click', reset, function() {
    randomNum = Math.floor(Math.random() * 51);
    console.log(randomNum);
    output.innerText = 'Guess a number between 1-50!';
    reset.style.display = 'none';
    guessBtn.style.display = 'initial';
})