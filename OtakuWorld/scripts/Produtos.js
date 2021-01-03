//Somente alguns testes - Nada muito funcional

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

var banner = document.querySelector("#banner")
var Slide = 1;

function mudarImagem() {
    setTimeout(opacidade, 2200);
    if(Slide == 4) {
        banner.src = `./images/Slides/Slide${Slide}.jpg`
        banner.style.opacity = "1"
        Slide = 1

    } else {
        banner.src = `./images/Slides/Slide${Slide}.jpg`
        banner.style.opacity = "1"
        Slide += 1
    }
}
function opacidade() {
    banner.style.opacity = "0.5"
}
setInterval(mudarImagem, 3000)

/**Tema e Teste de localStorage*/

var IconLamp2 = document.querySelector('img.IconLamp')
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
            IconLamp2.src = "./images/Svg/Lua.svg"
            header2.style.backgroundColor = "";
            title.style.backgroundColor= "";
            SlideAndTitle.style.backgroundColor= "";
            produtos.style.backgroundColor= "";
            End.style.backgroundColor= "";
            }
        
            else{
            IconLamp2.src = "./images/Svg/Sol.svg"
            header2.style.backgroundColor= "rgb(100, 100, 100, 0.9)";
            title.style.backgroundColor= "rgb(80, 80, 80)";
            SlideAndTitle.style.backgroundColor= "rgb(130, 130, 130)";
            produtos.style.backgroundColor= "rgb(120, 120, 120)";
            End.style.backgroundColor= "rgb(130, 130, 130)";
            }
    }

