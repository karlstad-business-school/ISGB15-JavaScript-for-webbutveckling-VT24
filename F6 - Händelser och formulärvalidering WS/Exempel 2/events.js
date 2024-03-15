'use strict';

window.addEventListener('load', ()=> {

    document.querySelector('body').addEventListener('click', ()=> {
        console.log('body clickad');
    }, true);

    document.querySelector('div.container-fluid').addEventListener('click', ()=> {
        console.log('div clickad');
    }, true);

    document.querySelector('div.container-fluid>p').addEventListener('click', ()=> {
        console.log('p clickad');
    }, true);

    document.querySelector('div.container-fluid>p>b').addEventListener('click', ()=> {
        console.log('b clickad');
    }, true);

});