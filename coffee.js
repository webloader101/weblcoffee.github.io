"use strict"

const navbar = document.querySelector('.header .navbar');
const menu = document.querySelector('#menu-btn');
const cartItem = document.querySelector('.cart-items-container');
const cartBtn = document.querySelector('#cart-btn');
const searchBtn = document.querySelector('#search-btn');
const searchForm = document.querySelector('.search-form');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
});

cartBtn.addEventListener('click', () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
});

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
})

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');

}





// Welcom page 

/*const text = document.querySelector('.text');
const content = document.querySelector('.home .content');


function getName() {
    setTimeout(() => {
        const infor = prompt("What's your name??");
        if (typeof infor === 'string' && isNaN(infor)) {
            text.innerHTML = `Welcome ${infor}..`;
        } else {
            alert('Enter only your name')
        }
    }, 2000)
}

getName();*/