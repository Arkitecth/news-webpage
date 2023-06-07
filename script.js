const hamburger = document.querySelector(".hamburger-menu"); 
const iconMenu = document.querySelector(".icon-menu");
const menuItems = document.querySelector(".menu-items"); 
iconMenu.addEventListener("click", () => {
    hamburger.classList.toggle("menu-box"); 
    iconMenu.classList.toggle("toggle-icon"); 
    menuItems.classList.toggle("toggle-menu-items"); 
})
iconMenu.src = "assets/images/icon-menu.svg"; 