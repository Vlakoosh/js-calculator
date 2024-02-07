/*
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} from 'mathjs'
*/


const numberButtons = document.querySelectorAll('.button:not(.equals)');
const calculatorScreen = document.querySelector('#calculatorScreen');
const equalsButton = document.querySelector('.equals');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculatorScreen.value = calculatorScreen.value + button.innerHTML;
        console.log('button pressed')
    })
})

equalsButton.addEventListener('click', () => {
    const mathEquation = calculatorScreen.value;
    //evaluateEquation(mathEquation)
})

/*
function evaluateEquation (mathEquation) {
    console.log(evaluate(mathEquation))
    calculatorScreen.value = evaluate(mathEquation);
}
*/
