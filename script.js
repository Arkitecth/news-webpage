const hamburger = document.querySelector(".hamburger-menu"); 
const iconMenu = document.querySelector(".icon-menu");
const menuItems = document.querySelector(".menu-items"); 
const backgroundImage = document.querySelector(".background-image"); 

const body = document.querySelector("body"); 
iconMenu.addEventListener("click", () => {
    hamburger.classList.toggle("menu-box"); 
    iconMenu.classList.toggle("toggle-icon"); 
    menuItems.classList.toggle("toggle-menu-items"); 
    body.classList.toggle("toggle-dark");
    backgroundImage.classList.toggle("toggle-background-brightness");
})
iconMenu.src = "assets/images/icon-menu.svg"; 