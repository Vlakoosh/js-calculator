
const numberButtons = document.querySelectorAll('.button:not(.equals)');
const calculatorScreen = document.querySelector('#calculatorScreen');
const equalsButton = document.querySelector('.equals');
const resetButton = document.querySelector('#deleteButton'); 

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculatorScreen.value += button.innerHTML;
        console.log('button pressed');
    });
});

equalsButton.addEventListener('click', () => {
    const mathEquation = calculatorScreen.value;
    try {
        const result = math.evaluate(mathEquation);
        calculatorScreen.value = result;
        console.log(result);
    } catch (error) {
        console.error('Error evaluating equation:', error);
    }
});


resetButton.addEventListener('click', () => {
    calculatorScreen.value = '';
    console.log('C button pressed (reset)');
});
