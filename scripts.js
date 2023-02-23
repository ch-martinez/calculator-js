const pad = document.getElementById('pad')
let operation = document.getElementById('operation')
let result = document.getElementById('result')

let operationComplete = false

/* Limpia display por completo */
const clearAll = () => {
    operation.textContent = 0
    result.textContent = 0
}

/* Borra el ultimo valor ingresado */
const clear = () => {
    let op = operation.textContent
    if (op != 0) {
        (op.length == 1) ? operation.textContent = 0 : operation.textContent = op.substring(0, op.length - 1)
    }
}

/* Devuelve el ultimo valor de operation*/
const lastValue = () => {
    return (operation.textContent.substring(operation.textContent.length - 1))
}

/* Fix para que no se ingrese mas de 1 valor */
const checked = (e) => {
    return (e.length > 1) ? true : false
}

const writeResult = () => {
    result.textContent = eval(operation.textContent);
    result.textContent = result.textContent.substring(0,13)
    operationComplete = true;
}

/* Muestra por pantalla la operation*/
const writeOperation = (key) => {
    if (!checked(key) && operation.textContent.length < 22) {
        /* if (operation.textContent == '0' && key != '.') operation.textContent = '' */

        /* Si se realizo la operacion y se ingresa un operador, utiliza el resultado junto a la nueva operacion */
        if (operationComplete && isNaN(key)) {
            operation.textContent = result.textContent
            operationComplete = false
        }

        /* Si se realizo la operacion y se ingresa un numero, limpia la pantalla y empieza una nueva operacion */
        if (operationComplete && !isNaN(key)) {
            clearAll()
            operationComplete = false
        }

        /*Si el ultimo digito es un operador lo sobreescribe*/
        if (isNaN(key) && isNaN(lastValue())) {
            operation.textContent = operation.textContent.substring(0, operation.textContent.length - 1) + key
        } else {
            (operation.textContent == 0 && !(isNaN(key))) ? operation.textContent = key : operation.textContent += key
        }
    }
}

/*Lee la key pulsada*/
const readOperation = (key) => {
    switch (key) {
        case '=':
            writeResult()
            break;
        case 'Enter':
            writeResult()
            break;
        /* -------------------- */
        case 'C':
            clearAll()
            break;
        case 'Delete':
            clearAll()
            break;
        /* -------------------- */
        case '<':
            clear()
            break;
        case 'Backspace':
            clear()
            break;
        /* -------------------- */
        default:
            writeOperation(key)
            break;
    }
}

/*Lectura por medio de mouse*/
pad.addEventListener('click', (e) => {
    readOperation(e.target.innerText)
})

/*lectura por medio de teclado*/
document.addEventListener('keyup', (e) => {
    readOperation(e.key)
})