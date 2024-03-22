'use strict';

let jsonstring =`[
    {
        "id": 1,
        "regnr": "ABC123",
        "marke": "Volvo",
        "modell": "S40",
        "arsmodell": 1999,
        "created_at": "2019-03-18T11:52:20.000000Z",
        "updated_at": "2019-03-18T11:52:20.000000Z"
    },
    {
        "id": 3,
        "regnr": "QQQ111",
        "marke": "Skoda",
        "modell": "Oktavia",
        "arsmodell": 2012,
        "created_at": "2019-03-18T11:53:09.000000Z",
        "updated_at": "2019-03-18T11:53:09.000000Z"
    },
    {
        "id": 4,
        "regnr": "WWW999",
        "marke": "Trabant",
        "modell": "Låda",
        "arsmodell": 1967,
        "created_at": "2019-03-18T11:53:44.000000Z",
        "updated_at": "2019-03-18T11:53:44.000000Z"
    },
    {
        "id": 5,
        "regnr": "WWW123",
        "marke": "Kuben333",
        "modell": "Kub",
        "arsmodell": 1934,
        "created_at": "2021-03-22T10:07:35.000000Z",
        "updated_at": "2021-03-22T10:21:53.000000Z"
    }
]`;
//()={}, shortcode för function() {}
window.addEventListener('load', ()=> {
	renderPage();
	document.querySelector('body').addEventListener('click',bodyClicked);
});

function renderPage() {
	
	let table = document.querySelector('table');
	let counter=1;
	for(let rad=1; rad<=10; rad++) {
		
		let tr = document.createElement('tr');
		
		for(let kol=1; kol<=10; kol++) {
			
			let td = document.createElement('td');
			td.classList.add('p-3');
			//td.setAttribute('data-nummer',rad + kol - 1);
			let text = document.createTextNode(counter);
			//eller
			

			td.appendChild(text);
			tr.appendChild(td);
			counter++;
		}
		
		table.appendChild(tr);			
		
	}

	let body = document.querySelector('body');
	let textruta = document.createElement('input');
	let label = document.createElement('label');
	let btn = document.createElement('a');
	
	label.setAttribute('for','nmbr');
	label.textContent='Ange radnummer';
	textruta.classList.add('form-control', 'w-25');
	textruta.type='number';
	textruta.value=1;
	textruta.id='nmbr';
	btn.href='#';
	btn.classList.add('btn', 'btn-info');
	btn.textContent='Ta bort rad';
	
	body.appendChild(label);
	body.appendChild(textruta);
	body.appendChild(btn);
	
	//OBS! ordningen spelar ingen roll så länge referensen "lever"
	btn.addEventListener('click', removeRow);
	
	
}

function bodyClicked(oEvt) {
	
	let klickadNode = oEvt.target;
	
	//Lägg till sen...
	if(klickadNode.nodeName == 'TD'){
		klickadNode.style.backgroundColor = 'red';
	}
	

}

function removeRow(oEvt) {
	
	let table = document.querySelector('table');
	let nbr = document.querySelector('#nmbr');
	let tableRows = table.querySelectorAll('tr');


	//Validera
	try {
		if ((nbr.value) > tableRows.length) {
			throw {'obj' : nbr, 'msg' : 'Raden kan inte tas bort' };
		}

		//Allt ok, ta bort eventuella felmeddelanden
		document.querySelectorAll('.my-error').forEach(element => {
			element.remove();
		});

		//Ta bort rad
		table.childNodes[nbr.value].remove();

	}
	catch(ex) {
		//Skapa upp felmeddelande
		let div = document.createElement('div');
		div.classList.add('alert','alert-danger', 'my-error');
		div.textContent = ex.msg;

		//Node.insertBefore()
		//let insertedNode = parentNode.insertBefore(newNode, referenceNode)
		let parent = ex.obj.parentElement;
		//console.log(ex.obj.parentElement);
		parent.insertBefore(div,ex.obj);

	}

}




