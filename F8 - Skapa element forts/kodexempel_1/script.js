'use strict';

//()={}, shortcode för function() {}
window.addEventListener('load', ()=> {
	
	//renderPage();
	//renderPageInnerHTML();
	//renderPageTheRightWay();
});

function renderPage() {
	
	//Hela sidan måste skapas upp... jobbigt	
	document.writeln('<main>');
	document.writeln('<h1>');
	document.writeln('Html skapad vid load');
	document.writeln('</h1>');
	document.writeln('<button class="btn btn-primary" onclick="btnClick();">Push!</button>');
	document.writeln('</main>');
	
	
}

function renderPageInnerHTML() {
	
	let body = document.querySelector('body');
	
	body.innerHTML = '<main><h1>Html skapad vid load</h1><button class="btn btn-primary">Push!</button></main>';
	
	//Lyssnare?
}

function renderPageTheRightWay() {
	
}

function btnClick(oEvt) {
	//slumpa fram ny färg på knappen
	
	let slmp = Math.floor((Math.random() * 5) + 1);
	console.log(slmp);
	
	switch(slmp) {
		case 1: 
			this.setAttribute('class','btn btn-primary');
			break;
		case 2:
			this.setAttribute('class','btn btn-danger');
			break;
		case 3:
			this.setAttribute('class','btn btn-warning');
			break;
		case 4:
			this.setAttribute('class','btn btn-secondary');
			break;	
		case 5:
			let newButton = document.createElement('button');
			let text = document.createTextNode('PUSH!');
			newButton.appendChild(text);
			newButton.addEventListener('click', btnClick);
			document.querySelector('main').insertBefore(newButton,this);
	}
	
}

