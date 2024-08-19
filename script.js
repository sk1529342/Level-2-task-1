document.addEventListener("DOMContentLoaded", function() {
    const displayExpression = document.querySelector(".display .expression");
    const displayResult = document.querySelector(".display .result");
    const buttons = document.querySelectorAll(".buttons button");
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.textContent;

            switch(value) {
                case 'clear':
                    displayExpression.textContent = '';
                    displayResult.textContent = '';
                    break;
                case 'del':
                    displayExpression.textContent = displayExpression.textContent.slice(0, -1);
                    break;
                case 'ENTER':
                    try {
                        displayResult.textContent = eval(displayExpression.textContent.replace('×', '*').replace('÷', '/').replace('%', '/100').replace('√', 'Math.sqrt'));
                    } catch {
                        displayResult.textContent = 'Error';
                    }
                    break;
                default:
                    displayExpression.textContent += value;
            }
        });
    });
});
