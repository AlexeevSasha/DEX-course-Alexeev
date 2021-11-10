const valueX = document.getElementById('opX');
const valueOperator = document.getElementById('op');
const valueY = document.getElementById('opY');
const btnRandom = document.querySelectorAll('.button__random');
const btnCalculator = document.querySelector('.button__calculate')
const btnReser = document.querySelector('.button__reset')

const operators = {
    '+': (numX, numY) => +numX + +numY,
    '-': (numX, numY) => numX - numY,
    '*': (numX, numY) => numX * numY,
    '/': (numX, numY) => numY != '0' ? numX / numY : showError('На ноль делить нельзя'),
    '^': (numX, numY) => numX ** numY,
    '%': (numX, numY) => numX % numY,
}


//event listener
valueX.addEventListener('input', () => {
    // проверка, чтобы небыло много нулей
    if (valueX.value == '00') valueX.value = 0;
})
valueY.addEventListener('input', () => {
    // проверка, чтобы небыло много нулей
    if (valueY.value == '00') valueY.value = 0;
})

// вычисляет результат
btnCalculator.addEventListener('click', () => {
    if (checkNumberAndOperator()) return;

    // появляется кнопка очистить
    btnReser.style.display = 'block'

    let result = operators[valueOperator.value](valueX.value, valueY.value)
    showResult(result)
})

// удаляет результат
btnReser.addEventListener('click', () => {
    valueX.value = '';
    valueY.value = '';
    valueOperator.value = '';
    document.querySelector('.result').style.display = 'none'
})

btnRandom.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.hasAttribute('btnX')) valueX.value = randomNumber();
        if (btn.hasAttribute('btnY')) valueY.value = randomNumber();
        if (btn.hasAttribute('btnOp')) valueOperator.value = randomOperator(operators);
    })
})




// Определяет рандомное значение
const randomNumber = () => Math.floor(Math.random() * 101);
function randomOperator(obj) {
    const arrKey = Object.keys(obj)
    let random = Math.floor(Math.random() * arrKey.length)
    return valueOperator.value !== arrKey[random] ? arrKey[random] : randomOperator(operators)
}


//проверка на числа и оператор
function checkNumberAndOperator() {
    if (valueX.value == '' || valueY.value == '') {
        showError('Введите значение')
        return true;
    }
    let arrKeyOperators = Object.keys(operators);
    if (arrKeyOperators.indexOf(valueOperator.value) == -1) {
        showError('Введите оператор: +, -, /, *, ^, %', 3000)
        return true;
    }
}



// выводим результат
function showResult(message) {
    const result = document.querySelector('.result')
    result.style.display = 'block';
    result.textContent = message.toFixed(2).replace(/\.?0*$/g, '')
}

//выводит ошибку
function showError(error, time = 2000) {
    const divError = document.createElement('div');
    divError.classList.add('error');
    divError.style.display = 'block'
    const h2 = document.createElement('h2');
    h2.classList.add('error__title');
    h2.textContent = error;
    divError.style.display = 'block'
    divError.appendChild(h2);
    document.querySelector('.wrapper').appendChild(divError)

    //удаляет ошибку
    setTimeout(e => divError.remove(), time)
}
















