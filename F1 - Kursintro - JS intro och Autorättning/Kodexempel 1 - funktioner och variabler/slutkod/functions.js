"use strict"
 
window.onload = function(){
    console.log(document.getElementById("content"));
    console.log("Hello world", 5);

    let name = "Alexander";
    console.log(name);

    function write(name, text){
        document.write("<b>" + name + " wrote: </b>" + text + "<br>");
    }

    write("Pierre", "Hej");
    write(name, "Hej hej!");



    function sub(tal1, tal2){
        return tal1 - tal2;
    }

    write("Peter", "15 - 3 = " + sub(sub(15, 1), 3));



}

