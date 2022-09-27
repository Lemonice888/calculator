/* WHAT TO DO 
1. make sure the first element that the user will click on is the'first operand'. Prevent the user from clicking the operator button first. ---DONE
2. Store the first operand if the user has clicked the operator button.
3. Make sure that the user won't click the operator button twice. --DONE
4. Only take the last operator if the users click it twice.
4. Store the second operand and execute the operation if the user has clicked the '=' button. */

const digitBtns = document.querySelectorAll('.digit')
const operatorBtns = document.querySelectorAll('.operators')
const resultArea = document.querySelector('.result')
const buttons = document.querySelectorAll('button')

let currentDigits = []
let nextDigits = []
let previousResultDigits = []
let currentOperator = ''

const previousArea = document.createElement('div')
previousArea.classList.add('previousArea')

//remember to delete this
const checkCurrentD = document.querySelector('#check1')
checkCurrentD.addEventListener('click', () => {
    console.log(currentDigits)    
})

const checkCurentOp = document.querySelector('#check2')
checkCurentOp.addEventListener('click', () => {
    console.log(currentOperator)    
})

const checkNextD = document.querySelector('#check3')
checkNextD.addEventListener('click', () => {
    console.log(nextDigits)    
})

/* AC BUTTON */
const eraseEntireBtn = document.querySelector('.eraseEntire')
eraseEntireBtn.addEventListener('click', () => {
    resultArea.textContent = '0'
    currentDigits = []
    previousResultDigits = []
    currentOperator = ''
})

/* BACKSPACE BUTTON */
const backspace = document.querySelector('.erase')
backspace.addEventListener('click', () => {
    if (currentDigits !== '') {
        currentDigits = currentDigits.slice(0, -1)
    } else if (currentOperator !== '') {
        currentOperator = currentOperator.slice(0, -1)
    }
    resultArea.textContent = resultArea.textContent.slice(0, -1)
})

/* TASK 1:
Create the functions that populate the display when you click the number buttons. 
You should be storing the ‘display value’ in a variable somewhere for use in the next step. */

// input digits
digitBtns.forEach((digitBtn) => {
    function storeDigits() {
        if (currentDigits.length < 15) {
            currentDigits += digitBtn.id
        } else if (nextDigits.length < 15 && currentDigits !== '' && currentOperator !== '') {
            nextDigits += digitBtn.id
        } else {
            return
        }
    }

    //condition for storing the values
    if (currentDigits == '') {
    digitBtn.addEventListener('click', () => {
        storeDigits(currentDigits)
        resultArea.textContent += currentDigits
    })
    } else if (currentDigits !== ''  && currentOperator !== '') {
        storeDigits(nextDigits)
        resultArea.textContent += nextDigits
    }
})

// input the operator
operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', () => {
        if (checkCurentOp === '') {
            return
        } else if (currentOperator !== '') {
            return
        } else {
            
        }
    })
})


/*TASK 2:
You’ll need to store the first number that is input into the calculator when a user presses an operator, 
and also save which operation has been chosen and then operate() on them when the user presses the “=” key. */



