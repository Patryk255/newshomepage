'use strict';
const links = document.querySelector(".links");
    const body = document.querySelector('.blur');

function toggleMenu() {
    links.style.display = "flex"; 
    body.style.display = 'block';
  }

function closeMenu() {
    links.style.display = 'none';
    body.style.display = 'none';
}