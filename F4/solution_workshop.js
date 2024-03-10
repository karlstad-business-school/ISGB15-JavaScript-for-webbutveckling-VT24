'use strict';
let timerData = {
    timerId : 0
};

//I workshopen/räknestugan/föreläsning 4 kommer jag att använda mig av on-attributen och då i JavaScript med anonyma funktioner.




//Här börjar dagens kod.

window.onload = function() {

    //Här är det ok att modifiera DOM:en
    console.log('onload');

    document.querySelector('#txtNamn').focus();

    document.querySelector('#theForm').onsubmit = function() {
      
        try {

            let textRefs = this.querySelectorAll('input[type=text], textarea');
            console.log( textRefs );

            let currentTextRef = null;

            for( let counter = 0; counter < textRefs.length; counter++) {
                currentTextRef = textRefs.item( counter );

                if( currentTextRef.value.length === 0) {
                    throw { elmRef : currentTextRef };
                }

            }

            return true;

        }catch(oError) {


            oError.elmRef.focus();
            document.querySelector('#errorMsg').textContent = 'Ange ' + oError.elmRef.getAttribute('title') + '!';
            return false;

        }


    };


    document.querySelector('#txtFritext').oninput = function() {

        document.querySelector('#nbrOfChars').textContent = this.value.length;

    };

    document.querySelector('form').onreset = function() {
        document.querySelector('#nbrOfChars').textContent = '0';
        document.querySelector('#errorMsg').textContent = '';
        document.querySelector('#timerDemo').textContent = '';
    };


    document.querySelector('#start').onclick = function() {

        if( timerData.timerId !== 0) {
            document.querySelector('#timerDemo').textContent = '';
            clearInterval(timerData.timerId);
        }

        timerData.timerId = setInterval(function() {
            document.querySelector('#timerDemo').textContent += '#';
            console.log(Date.now());
        }, 1000);

    };

    document.querySelector('#stop').onclick = function() {

        if( timerData.timerId !== 0) {
            clearInterval(timerData.timerId);
        }
    };

};

//Här slutar dagens kod.




//Att öva på egen hand är att göra om lösningen till "vanliga" funktioner och lägga till on-attribut i HTML.

function setFocusOnForm() {
    /*
        -- 1 --
        1. Debugutskrift till Console
        2. Sätt fokus på första textrutan i formuläret
    */
}

function countNumberOfChars(textAreaRef) {
    /*
        -- 2 --
        1. Debugutskrift till Console
        2. Visa siffran för antalet tecken i textarea:n.
    */
}

function resetForm() {
    /*
        -- 3 -- 
        1. Debugutskrift till Console
        2. Återställ formuläret till samma tillstånd som vid uppstart.
    */
}
function checkForm() {
    /*
        -- 4 --
        1. Debugutskrift till Console
        2. Validera indata i formuläret och använda undantagshantering.
    */
}

function startTimer() {
    /*
        -- 5 --
        1. Debugutskrift till Console
        2. Kontrollera om en timer är gång och om så är fallet avsluta timer.
        3. Starta en ny timer som exekverar en funktion en gång i sekunden.
    */
}

function stoppTimer() {
    /*
        -- 6 --
        1. Debugutskrift till Console
        2. Kontrollera om en timer är gång och om så är fallet avsluta timer.
    */
}