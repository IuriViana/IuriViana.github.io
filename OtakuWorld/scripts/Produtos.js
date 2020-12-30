var MenuLateral = document.querySelector(".MenuLateral");

function Ativar(){

    if(MenuLateral.style.left === ""){
        MenuLateral.style.left = "0vw";
    }
    else{
        MenuLateral.style.left = ""
    }
}

var intervalo = 3000;
var banner = document.querySelector("#banner")

function slide1(){
    banner.src = "./images/Slides/Slide1.jpg"
    setTimeout("slide2()", intervalo);
    banner.style.opacity = "1"
}

function slide2(){
    banner.src = "./images/Slides/Slide2.jpg"
    setTimeout("slide3()", intervalo);
    banner.style.opacity = "0.9"
}

function slide3(){
    banner.src = "./images/Slides/Slide3.jpg"
    setTimeout("slide4()", intervalo);
    banner.style.opacity = "1"
}

function slide4(){
    banner.src = "./images/Slides/Slide4.jpg"
    setTimeout("slide5()", intervalo);
    banner.style.opacity = "0.9"
}

function slide5(){
    banner.src = "./images/Slides/Slide5.jpg"
    setTimeout("slide1()", intervalo);
    banner.style.opacity = "1"
}


var header = document.querySelector('header.principal');
var SlideAndTitle = document.querySelector('.SlideAndTitle');
var title = document.querySelector('.title');
var produtos = document.querySelector('#produtos');
var End = document.querySelector('#End');


function Tema(){
    if(title.style.backgroundColor== "rgb(80, 80, 80)"){
        header.style.backgroundColor = "";
        title.style.backgroundColor= "";
        SlideAndTitle.style.backgroundColor= "";
        produtos.style.backgroundColor= "";
        End.style.backgroundColor= "";
        }
    
        else{
        header.style.backgroundColor= "rgb(100, 100, 100, 0.9)";
        title.style.backgroundColor= "rgb(80, 80, 80)";
        SlideAndTitle.style.backgroundColor= "rgb(130, 130, 130)";
        produtos.style.backgroundColor= "rgb(120, 120, 120)";
        End.style.backgroundColor= "rgb(130, 130, 130)";

        }
}