//Somente alguns testes - Nada muito funcional ou compacto


/*Ativar menu lateral*/
var MenuLateral = document.querySelector(".MenuLateral");
function Ativar(){
    if(MenuLateral.style.left === ""){
        MenuLateral.style.left = "0vw";
    }
    else{
        MenuLateral.style.left = ""
    }
}

/*Slide*/ 

var intervalo = 3000;
var banner = document.querySelector("#banner")
var keyframe = [{opacity:'0.4'},{opacity:'1'}]

function slide1(){
    banner.src = "./images/Slides/Slide1.jpg"
    banner.animate(keyframe, {duration: 3000, iterations: 1});
    setTimeout("slide2()", intervalo);
}

function slide2(){
    banner.src = "./images/Slides/Slide2.jpg"
    banner.animate(keyframe, {duration: 3000, iterations: 1});
    setTimeout("slide3()", intervalo);
}

function slide3(){
    banner.src = "./images/Slides/Slide3.jpg"
    banner.animate(keyframe, {duration: 3000, iterations: 1});
    setTimeout("slide4()", intervalo);
}

function slide4(){
    banner.src = "./images/Slides/Slide4.jpg"
    banner.animate(keyframe, {duration: 3000, iterations: 1});
    setTimeout("slide1()", intervalo);
}

/**Tema com localStorage*/

var header2 = document.querySelector('header.principal');
var SlideAndTitle = document.querySelector('.SlideAndTitle');
var title = document.querySelector('.title');
var produtos = document.querySelector('#produtos');
var End = document.querySelector('#End');

header2.style.backgroundColor = localStorage.header2
SlideAndTitle.style.backgroundColor = localStorage.SlideAndTitle
title.style.backgroundColor = localStorage.title
produtos.style.backgroundColor= localStorage.produtos;
End.style.backgroundColor = localStorage.End;

var SalvarDados = function() {
    localStorage.setItem('IconLamp2', IconLamp2.src);
    localStorage.setItem('header2', header2.style.backgroundColor);
    localStorage.setItem('SlideAndTitle', SlideAndTitle.style.backgroundColor);
    localStorage.setItem('title', title.style.backgroundColor);
    localStorage.setItem('produtos', produtos.style.backgroundColor);
    localStorage.setItem('End', End.style.backgroundColor);
}
document.onclick = SalvarDados;

    function Tema(){
        if(title.style.backgroundColor== "rgb(80, 80, 80)"){
            header2.style.backgroundColor = "";
            title.style.backgroundColor= "";
            SlideAndTitle.style.backgroundColor= "";
            produtos.style.backgroundColor= "";
            End.style.backgroundColor= "";
            }
        
            else{
            header2.style.backgroundColor= "rgb(100, 100, 100, 0.9)";
            title.style.backgroundColor= "rgb(80, 80, 80)";
            SlideAndTitle.style.backgroundColor= "rgb(130, 130, 130)";
            produtos.style.backgroundColor= "rgb(120, 120, 120)";
            End.style.backgroundColor= "rgb(130, 130, 130)";
            }
    }

