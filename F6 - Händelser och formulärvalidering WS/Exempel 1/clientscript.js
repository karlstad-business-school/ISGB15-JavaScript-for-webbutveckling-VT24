'use strict';
window.addEventListener('load', ()=> {

	let knappar = document.querySelectorAll('table button');

	for(let i=0; i< knappar.length; i++) {
		knappar[i].classList.add('btn','btn-primary');
	}

	knappar.forEach(knapp=> {
		knapp.addEventListener('click', changeClass);
	});




});

function changeClass(oEvt) {

	oEvt.currentTarget.classList.toggle('btn-primary');
	oEvt.currentTarget.classList.toggle('btn-danger');

}