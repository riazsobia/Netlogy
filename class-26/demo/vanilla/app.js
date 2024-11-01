let state = {};

let button = document.getElementById("clicker");
button.addEventListener('click', handleClick);

let input = document.getElementById("words-input");
input.addEventListener('change', handleInput)


function handleClick(event) {
    // reverse the input words
    state.words = state.words.split('').reverse().join('');
    render();
}

function handleInput(event) {
    // update state object with the input
    state.words = event.target.value;
}

function init() {
    state.words = 'First Render! Not Reversed';
    render();
}

function render() {
    document.getElementById("words").textContent = state.words;
}

init();