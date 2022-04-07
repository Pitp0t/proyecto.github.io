
//====================================================
//Hamburguer responsive icon
//====================================================

const ullist = document.getElementById('ul-list');
const hamburguer = document.querySelector('.hamburguer');


hamburguer.addEventListener('click',()=>{
    
    ullist.classList.toggle('show');
    


})






//====================================================
//Escalo el call to action segun el valor del scroll
//====================================================


const scroll = document.getElementById('cont-2');
const svg = document.getElementById('Capa_1');

window.addEventListener('scroll',()=>{
    
    valor = 1 + window.scrollY/120;
    console.log(valor)
    if(valor < 10 ) {
        scroll.style.transform=`scale(${valor})`;
        
    }
    
})

