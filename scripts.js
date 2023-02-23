const pad = document.getElementById('pad')
let actual = document.getElementById('actual')
let result = document.getElementById('result')

const clearAll = () => {
    actual.textContent = 0
    result.textContent = 0
}
const clear = () => {
    let op = actual.textContent
    if (op != 0) {     
        (op.length == 1) ? actual.textContent = 0 : actual.textContent = op.substring(0,op.length - 1)   
    }
}

const check = (e) =>{
    
    ((e.target.innerText).length > 1) ? console.log('Se descajeto!') : console.log('bieen')
}

pad.addEventListener('click', (e) =>{
    switch (e.target.innerText) {
        case '=':
            result.textContent = eval(actual.textContent)
            actual.textContent = 0
            break;
        case 'C':
            clearAll()
            break;
        case '<':
            clear()
            break;

        default:
            check(e)
            (actual.textContent == 0) ? actual.textContent = e.target.innerText : actual.textContent += e.target.innerText
            break;
    }
})