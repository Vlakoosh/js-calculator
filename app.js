
const buttons = document.querySelectorAll('.button');
const calculatorScreen = document.querySelector('#calculatorScreen');
const equalsButton = document.querySelector('.equals');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        //check if button's content can be directly added to the equation. Marked by class 'n'
        if ( button.classList.contains('n') ) {
            calculatorScreen.value += button.innerHTML;
        }

        switch (button.id) {
            case 'trigPiButton':
                calculatorScreen.value += 'pi';
                break;
            case 'deleteButton':
                calculatorScreen.value = '';
                console.log('C button pressed (reset)');
                break;
            case 'equalsButton':
                const mathEquation = calculatorScreen.value;
                if (mathEquation.trim() === "9+10") {
                    calculatorScreen.value = "21";
                    break;
                }
                try {
                    calculatorScreen.value = math.evaluate(mathEquation);
                } catch (error) {
                    console.error('Error evaluating equation:', error);
                    console.log('kill yourself')
                }
                break;
            case 'trigSinButton':
                calculatorScreen.value += 'sin(';
                break;
            case 'trigCosButton':
                calculatorScreen.value += 'cos(';
                break;
            case 'trigTanButton':
                calculatorScreen.value += 'tan(';
                break;
            case 'naturalLogButton':
                calculatorScreen.value += 'log(';
                break;
            case 'squareButton':
                calculatorScreen.value += '^2';
                break;
            case 'exponentButton':
                calculatorScreen.value += '^';
                break;
            case 'backspaceButton':
                calculatorScreen.value = calculatorScreen.value.substring(0,calculatorScreen.value.length - 1);

        }

    });
});

equalsButton.addEventListener('click', () => {

});
