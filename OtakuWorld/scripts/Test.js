var back = document.body;

var header = document.querySelector('header.principal');
var Hs = document.querySelector('header.second')
var Lamp = document.querySelector('.containerLamp');
var IconLamp = document.querySelector('img.IconLamp')
var Aside = document.querySelector('#AsideImg');
var bar = document.querySelector('.barrinha');


function Tema(){

    if(back.style.backgroundColor == "rgb(135, 140, 145)"){
        
    back.style.backgroundColor = "";
    header.style.backgroundColor = "";
    Lamp.style.backgroundColor = "";
    IconLamp.src = "./images/Lua.svg"
    bar.style.backgroundColor = "";
    Aside.style.filter = "";
    Hs.style.backgroundColor = "";
    }

    else{

    back.style.backgroundColor="rgb(135, 140, 145)";
    header.style.backgroundColor= "rgb(85, 85, 85)";
    Lamp.style.backgroundColor= "rgb(105, 110, 115)";
    IconLamp.src = "./images/Sol.svg"
    bar.style.backgroundColor= "rgb(85, 85, 85)";
    Aside.style.filter = "grayscale(55%)";
    Hs.style.backgroundColor = "rgb(105, 110, 115)";
    }
}