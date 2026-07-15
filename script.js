let randomNumber = Math.floor(Math.random()*100)+1
// let randomNumber = 10
// console.log(randomNumber);
const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHight = document.querySelector('.lowOrHight')
const guessSubmit = document.querySelector('.guessSubmit')
const guessField = document.querySelector('.guessField')

// console.log(guesses,lastResult,lowOrHight,guessSubmit,guessField);

let guessCount = 1
function checkGuess() {
    const userGuess = Number(guessField.value)
    // console.log(userGuess);
    // console.log(typeof userGuess);

    if (guessCount === 1) {
        guesses.textContent = 'Попередні спроби: '
    }
    guesses.textContent += userGuess + ' '
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Вітаємо ви вгадали число!!!'
        lastResult.style.backgroundColor = 'green'
        lowOrHight.textContent = ''
        setGameOver()
    } else if (guessCount === 10) {
        lastResult.textContent = 'Гру закінчено'
        lowOrHight.textContent = ''
        setGameOver()
    } else {
        lastResult.textContent = 'Неправильно'
        lastResult.style.backgroundColor = 'red'
        if (userGuess < randomNumber) {
            lowOrHight.textContent = 'Ваше число менше ніж мале загадане комп\'ютером'
        } else if (userGuess > randomNumber) {
            lowOrHight.textContent = 'Ваше число більше ніж загадане комп\'ютером'
        }
    }

        guessCount++
        guessField.value = ''
        guessField.focus()
}

guessSubmit.addEventListener('click', checkGuess)

guessField.addEventListener('keypress', (event) => {
    // console.log(event);
    // console.log(event.key);
    if (event.key === 'Enter') {
        checkGuess()
    }
})


function setGameOver() {
    guessField.disabled = true
    guessSubmit.disabled = true

    const resetButton = document.createElement('button')
    resetButton.id = 'resetButton'
    resetButton.textContent = 'Почати нову гру'
    document.body.appendChild(resetButton)
    resetButton.addEventListener('click', resetGame)

}



function resetGame() {
    // location.reload()
    guessCount = 1
    const resultParams = [guesses,lastResult,lowOrHight]
    resultParams.forEach((param)=>{
        param.textContent = ''
        param.style.backgroundColor = ''
    })
    guessField.disabled = false
    guessSubmit.disabled = false
    guessField.value = ''
    guessField.focus()
    const resetButton = document.querySelector('#resetButton')
    resetButton.remove()
    randomNumber = Math.floor(Math.random()*100)+1
}

guessField.focus()