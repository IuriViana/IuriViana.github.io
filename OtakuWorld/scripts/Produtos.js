//Somente alguns testes - Nada muito funcional

/*LazyLoad - Não deu muito certo*/
const Imgs = document.querySelectorAll(".allImgs img");

function AtivaNoScroll(){
    Imgs.forEach((img, index) => {
        if(img.getBoundingClientRect().top < window.innerHeight/0.62){
            console.log("Imagem apareceu", index);
            img.src = img.getAttribute('data-src');
        }
        return false;
    });
}
window.addEventListener('scroll', AtivaNoScroll)
/*Slide*/ 

var banner = document.querySelector("#banner")
var Slide = 1;

function mudarImagem(){
    banner.animate([{opacity: 1}, {opacity: 0.3}], {duration: 4000, iterations: 1})
    if(Slide == 4) {
        banner.src = `./images/Slides/Slide${Slide}.jpg`
        Slide = 1

    } else {
        banner.src = `./images/Slides/Slide${Slide}.jpg`
        Slide += 1
    }
}
setInterval(mudarImagem, 3000)

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

