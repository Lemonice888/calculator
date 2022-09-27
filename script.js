/* WHAT TO DO 
1. make sure the first element that the user will click on is the'first operand'. Prevent the user from clicking the operator button first. ---DONE
2. Store the first digits if the user has not clicked the operator button. --DONE
3. Store the second digits if the user has clicked the operator button. --DONE
4. Make sure that the user won't click the operator button twice. --DONE
5. Only take the last operator if the users click it twice.
6. Execute the operation if the user has clicked the '=' button.
7. Prevent user from clicking the = button first */

const digitBtns = document.querySelectorAll('.digit')
const operatorBtns = document.querySelectorAll('.operators')
const resultArea = document.querySelector('.result')
const buttons = document.querySelectorAll('button')
const equal = document.querySelector('.equal')

let firstDigits = []
let secondDigits = []
let resultDigits = []
let currentOperator = ''

const history = resultArea.c

//remember to delete this
const checkArea = document.querySelector('#check0')
checkArea.addEventListener('click', () => {
    console.log(resultArea.textContent)    
})

const checkCurrentD = document.querySelector('#check1')
checkCurrentD.addEventListener('click', () => {
    console.log(firstDigits)    
})

const checkCurentOp = document.querySelector('#check2')
checkCurentOp.addEventListener('click', () => {
    console.log(currentOperator)    
})

const checkNextD = document.querySelector('#check3')
checkNextD.addEventListener('click', () => {
    console.log(secondDigits)    
})

/* AC BUTTON */
const eraseEntireBtn = document.querySelector('.eraseEntire')
eraseEntireBtn.addEventListener('click', () => {
    resultArea.textContent = '0'
    firstDigits = ''
    secondDigits = ''
    previousResultDigits = ''
    currentOperator = ''
})

/* BACKSPACE BUTTON */
const backspace = document.querySelector('.erase')
backspace.addEventListener('click', () => {
    if (firstDigits !== '' ) {
        firstDigits = firstDigits.slice(0, -1)
    } if (currentOperator !== '') {
        currentOperator = currentOperator.slice(0, -1)
    }
    resultArea.textContent = resultArea.textContent.slice(0, -1)
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

/* OPERATOR BUTTON */
operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', () => {
        if (resultArea.textContent == '0') {
            return
        } else if (currentOperator !== '') {
            return
        } else {
            resultArea.textContent += operatorBtn.id
            currentOperator = operatorBtn.id
        }
    })
})

function add (x, y) {
    resultDigits = x + y
    firstDigits = resultDigits
    nextDigits = ''
}

/* EQUAL BUTTON */
equal.addEventListener('click', () => {
    x = parseFloat(firstDigits)
    y = parseFloat(secondDigits)
    if (currentOperator === '+') {
        add(x, y)
    }
    console.log(resultDigits)
    console.log(firstDigits)
    console.log(nextDigits)
})