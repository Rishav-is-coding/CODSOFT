const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
let displayValue = '';

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.getAttribute('data-value');

        if (value === 'clear') {
            displayValue = '';
            display.innerText = displayValue;
        } else if (value === '=') {
            try {
                displayValue = eval(displayValue).toString();
            } catch {
                displayValue = 'Error';
            }
            display.innerText = displayValue;
        } else {
            displayValue += value;
            display.innerText = displayValue;
        }
    });
});
