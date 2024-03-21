'use strict';

window.addEventListener('load', prepareColorPicker);

function prepareColorPicker(){
    
    let fields = document.querySelectorAll('.field');

    for(let i=0;i<fields.length;i++) {
        let input = fields[i].querySelector('input');
        let span = fields[i].querySelector('.value');

        let slump = Math.floor(Math.random()*256);
        span.textContent = slump;
        input.value = slump;

        fields[i].addEventListener('input', handleValueChange);
    }

    updateBackground();

}


function updateBackground() {

    let r = document.querySelector('#red').value;
    let g = document.querySelector('#green').value;
    let b = document.querySelector('#blue').value;

    console.log('r:' + r + ' g:' +g + ' b:' +b);

    let body = document.querySelector('body');

    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

    let nyDiv = document.createElement('div');
    nyDiv.setAttribute('style','border: 1px solid black');
    nyDiv.textContent = 'Färgen är nu: ' + r +', ' + g + ', ' + b;

    body.appendChild(nyDiv);


}

function handleValueChange(event) {

    let field = event.currentTarget;

    let inputElement = field.querySelector('input');
    //console.log(inputElement.value);
    let span = field.querySelector('span');

    span.textContent = inputElement.value;

    updateBackground();


}