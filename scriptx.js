/* WHAT TO DO 
1. make sure the first element that the user will click on is the'first operand'. Prevent the user from clicking the operator button first. ---DONE
2. Store the first operand if the user has clicked the operator button.
3. Make sure that the user won't click the operator button twice ---DONE
4. Store the second operand and execute the operation if the user has clicked the '=' button. */

const digitBtns = document.querySelectorAll('.digit')
const operatorBtns = document.querySelectorAll('.operators')
const resultArea = document.querySelector('.result')
const buttons = document.querySelectorAll('button')

let firstDigits = []
let lastDigits = []
let currentOperator = ''
let currentResult = ''

function inputDigits() {
buttons.forEach((button) => {
    button.addEventListener('click', function() {
        if (button.classList.contains('digit')) {
            if (currentOperator === '') {
                resultArea.textContent += button.id
                firstDigits = Number(button.id)
                console.log(firstDigits)
            } else if (currentOperator !== '') {
                resultArea.textContent += button.id
                lastDigits = Number(button.id)
            }
        } else if (button.classList.contains('operators')) {
            if (firstDigits === '') {
                return
            } else if (currentOperator !== '') {
                return
            } else {
                resultArea.textContent += button.id
                currentOperator = button.id
            }
        } else if (button.classList.contains('erase')) {
            resultArea.textContent.split()
        }
    })
})