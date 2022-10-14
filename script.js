const digitBtns = document.querySelectorAll('.digit')
const operatorBtns = document.querySelectorAll('.operators')
const resultArea = document.querySelector('.result')
const buttons = document.querySelectorAll('button')
const equal = document.querySelector('.equal')
const history = document.querySelector('.history')

let firstDigits = ''
let secondDigits = ''
let resultDigits = ''
let currentOperator = ''

/* AC BUTTON */
const eraseEntireBtn = document.querySelector('.eraseEntire')
eraseEntireBtn.addEventListener('click', () => {
    firstDigits = ''
    secondDigits = ''
    resultDigits = ''
    currentOperator = ''
    resultArea.textContent = '0'
    history.textContent = ''
})

/* OPERATOR BUTTON */
operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', () => {
        if (resultArea.textContent == '0') {
            return
        } else if (currentOperator !== '') {
            if (secondDigits !== '') {
                operateAndShow()
            } else if (secondDigits === '') {
                return
            }
        } else if (resultArea.textContent !== '0') {
            resultArea.textContent += operatorBtn.id
            currentOperator = operatorBtn.id
        } else if (resultDigits !== '') {
            newCurrentOperator = operatorBtn.id
            resultArea.textContent += operatorBtn.id
        } 
        if (resultDigits !== '') {
            currentOperator = operatorBtn.id
            resultArea.textContent = `${currentOperator}`
        }
    })
})

/* DECIMAL */
const decimalBtn = document.querySelector('.decimal')
decimalBtn.addEventListener('click', () => {
    if (resultArea.textContent === '0' || secondDigits.includes('.')) {
        return
    } else if (firstDigits !== '' && currentOperator === '' && secondDigits === '') {
        if (firstDigits.includes('.')) {
            return
        } else {
            firstDigits += decimalBtn.id
            resultArea.textContent = firstDigits
        }
    } else if (currentOperator !== '' && secondDigits !== '') {
        if (secondDigits.includes('.')) {
            return
        } else {
            secondDigits += decimalBtn.id
            resultArea.textContent = `${firstDigits} ${currentOperator} ${secondDigits}`
        } 
    }
})

/* BACKSPACE BUTTON */
const backspace = document.querySelector('.erase')
backspace.addEventListener('click', () => {
    if (currentOperator === '' && firstDigits !== '') {
        firstDigits = firstDigits.slice(0, -1)
        resultArea.textContent = resultArea.textContent.slice(0, -1)
    } else if (secondDigits === '' && currentOperator !== '' && firstDigits!== '') {
        resultArea.textContent = `${firstDigits}`
        currentOperator = ''
    } else if (secondDigits !== '') {
        secondDigits = secondDigits.slice(0, -1)
        resultArea.textContent = resultArea.textContent.slice(0, -1)
    }
})

/* DIGIT BUTTONS */
digitBtns.forEach((digitBtn) => {
    digitBtn.addEventListener('click', () => {
        if (currentOperator === '' && firstDigits.length < 15) {
            firstDigits += digitBtn.id
            resultArea.textContent = firstDigits
        } else if (currentOperator !== '' && secondDigits.length < 15) {
            secondDigits += digitBtn.id
            resultArea.textContent = `${firstDigits} ${currentOperator} ${secondDigits}`
        }
    })
})

/* OPERATIONS */
function add(x, y) {
    resultDigits = x + y
}

function substract(x, y) {
    resultDigits = x - y
}

function multiple(x, y) {
    resultDigits = x * y
}

function divide(x, y) {
    if (y == 0 || y == 0) {
        resultDigits = `Bruh.`
    } else {
        resultDigits = x / y
    }
}

function multiple(x, y) {
    resultDigits = x * y
}

function operateAndShow() {
        x = parseFloat(firstDigits)
        y = parseFloat(secondDigits)

        if (currentOperator === '+') {
            add(x, y)
        } else if (currentOperator === '-') {
            substract(x, y)
        } else if (currentOperator === '÷') {
            divide(x, y)
        } else if (currentOperator === 'x') {
            multiple(x, y)
        }
    
        if (resultDigits === 'Bruh.') {
            history.textContent = ''
            resultArea.textContent = resultDigits
            return
        } else {
            console.log(resultDigits)
            history.textContent = `${firstDigits} ${currentOperator} ${secondDigits} = ${resultDigits}`
            secondDigits = ''
            firstDigits = resultDigits
            resultArea.textContent = ''
        } 
}

/* EQUAL BUTTON */
equal.addEventListener('click', () => {
    if (resultArea.textContent === '0') {
        return
    } else if (currentOperator === '' || secondDigits === '') {
        return
    } else {
        operateAndShow()
        currentOperator = ''
    }
})

/* WHAT TO DO
1. make sure the first element that the user will click on is the'first operand'. Prevent the user from clicking the operator button first. ---DONE
2. Store the first digits if the user has not clicked the operator button. --DONE
3. Store the second digits if the user has clicked the operator button. --DONE
4. Make sure that the user won't click the operator button twice. --DONE
5. Allow the user to do repetitive calculation. --DONE
    -> NEED TO BE FIXED: the user has to click the op button twice right now. --DONE
6. Execute the operation if the user has clicked the '=' button. --DONE
7. Prevent user from clicking the = button first --DONE 
https://stackoverflow.com/questions/6095795/convert-a-javascript-string-variable-to-decimal-money
https://stackoverflow.com/questions/6134039/format-number-to-always-show-2-decimal-places 
https://www.w3schools.com/jsref/jsref_tofixed.asp */