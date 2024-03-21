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
    }

    updateBackground();

}


function updateBackground() {

    let r = document.querySelector('#red').value;
    let g = document.querySelector('#green').value;
    let b = document.querySelector('#blue').value;

    console.log('r:' + r + ' g:' +g + ' b:' +b);

    let body = document.querySelector('body');

    console.log("rgb(" + r + "," + g + "," + b + ")");

    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";




}