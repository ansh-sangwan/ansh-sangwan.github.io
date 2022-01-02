let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenvalue = ''
console.log('buttion text is ');
for (item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        console.log('buttion text is ', buttonText);
        if (buttonText == 'x') {
            debugger;
            buttonText = '*';
            screenvalue += buttonText;
            screen.value = screenvalue
        }
        else if (buttonText == 'c') {
            screenvalue = "";
            screen.value = screenvalue;
        }
        else if (buttonText == '=') {
            debugger;
            screen.value = eval(screenvalue)
        }
        else {
            screenvalue += buttonText;
            screen.value = screenvalue
        }
    })
}