let x = ''; //first number
let y = ''; //second number
let symbol = ''; //symbol action
let fin = false;

const digitArr = ['0', '1', '2', '3', '4','5','6','7','8','9','.'];
const actionArr = ['-', '+', 'x', '/', '%'];

//screen of calc
const out = document.querySelector('.calc__screen p');

function clearAll () {
    x = '';
    y = '';
    symbol = '';
    fin = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;



document.querySelector('.calc__buttons').onclick = (event) => {
    //click not button
    if(!event.target.classList.contains('btn')) return;
    //click clearAll
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';

    if (event.target.classList.contains('plus-minus')) {
        x = -1 * x;
    }

    out.textContent = x;

    //get select btn
    const key = event.target.textContent;
    if(digitArr.includes(key)) {
        if(y ==='' && symbol === ''){
            x +=key;
            out.textContent = x;
        }
        else if (x!=='' && y!=='' && fin) {
            y = key;
            fin = false;
            out.textContent = y;

        }
        else {
            y +=key;
            out.textContent = y;
        }
        return;

    }

    if(actionArr.includes(key)) {
        symbol=key;
        out.textContent = symbol;
        return;
    }

    //click result 
    if(key === '=') {
        if (y === '') y = x;
        switch(symbol) {
            case "+":
                x = (+x) + (+y);
                break;

                case "-":
                    x = x - y;
                    break;

                case "x":
                    x = x * y;
                    break;

                case "%":
                    result = x / 100;
                    x = result * y;
                    break;   

                case "+/-":
                    x = x * -1;
                    break;
                    
                
                case "/":
                    if (y === '0') {
                        out.textContent = 'Error';
                        x = '';
                        y = '';
                        symbol = '';
                        return;
                    }
                    x = x / y;
                    break;
        }
        fin = true;
        out.textContent = x;
    }
}