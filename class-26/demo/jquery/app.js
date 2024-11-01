let state = {};

let source = document.getElementById("stuff-template").innerHTML;
let template = Handlebars.compile(source);

$('#clicker').on('click', handleClick)
$('#words-input').on('change', handleInput)

function handleClick() {
    state.words = state.words.split('').reverse().join('');
    render();
}

function handleInput() {
    // state.words to have the value 
    state.words = $(this).val();
}

function init() {
    state.words = 'First Render not Reversed!';
    render();
}

function render() {
    // put the template with the value of the variable: in stuff
    $('#stuff').html(template(state))
}

$(function() {
    console.log("call init ")
    init();
});