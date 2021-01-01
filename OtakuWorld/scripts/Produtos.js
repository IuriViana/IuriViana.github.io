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
    banner.animate(keyframe, {duration: 2000, iterations: 1});
    setTimeout("slide2()", intervalo);
}

function slide2(){
    banner.animate(keyframe, {duration: 2000, iterations: 1});
    banner.src = "./images/Slides/Slide2.jpg"
    setTimeout("slide3()", intervalo);
}

function slide3(){
    banner.animate(keyframe, {duration: 2000, iterations: 1});
    banner.src = "./images/Slides/Slide3.jpg"
    setTimeout("slide4()", intervalo);
}

function slide4(){
    banner.animate(keyframe, {duration: 2000, iterations: 1});
    banner.src = "./images/Slides/Slide4.jpg"
    setTimeout("slide1()", intervalo);
}

/**Tema e localStorage*/

var header2 = document.querySelector('header.principal');
var SlideAndTitle = document.querySelector('.SlideAndTitle');
var title = document.querySelector('.title');
var produtos = document.querySelector('#produtos');
var End = document.querySelector('#End');
var IconLamp2 = document.querySelector('img.IconLamp')

header2.style.backgroundColor = localStorage.header2
SlideAndTitle.style.backgroundColor = localStorage.SlideAndTitle
title.style.backgroundColor = localStorage.title
produtos.style.backgroundColor= localStorage.produtos;
End.style.backgroundColor = localStorage.End;
IconLamp2.src = localStorage.IconLamp2;

    var SalvarDados = function() {
        localStorage.setItem('header2', header2.style.backgroundColor);
        localStorage.setItem('SlideAndTitle', SlideAndTitle.style.backgroundColor);
        localStorage.setItem('title', title.style.backgroundColor);
        localStorage.setItem('produtos', produtos.style.backgroundColor);
        localStorage.setItem('End', End.style.backgroundColor);
        localStorage.setItem('IconLamp2', IconLamp2.src);
    }
    document.onchange = SalvarDados;

    function Tema(){
        if(title.style.backgroundColor== "rgb(80, 80, 80)"){
            header2.style.backgroundColor = "";
            title.style.backgroundColor= "";
            SlideAndTitle.style.backgroundColor= "";
            IconLamp2.src = "./images/Svg/Lua.svg"
            produtos.style.backgroundColor= "";
            End.style.backgroundColor= "";
            }
        
            else{
            header2.style.backgroundColor= "rgb(100, 100, 100, 0.9)";
            title.style.backgroundColor= "rgb(80, 80, 80)";
            SlideAndTitle.style.backgroundColor= "rgb(130, 130, 130)";
            IconLamp2.src = "./images/Svg/Sol.svg"
            produtos.style.backgroundColor= "rgb(120, 120, 120)";
            End.style.backgroundColor= "rgb(130, 130, 130)";
            }
    }

