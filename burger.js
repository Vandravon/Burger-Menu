const burgerBtn = document.querySelector("nav .burger");
const menuBurger = document.querySelector("nav ul");

console.log(menuBurger);

burgerBtn.addEventListener("click", () => {
    menuBurger.classList.toggle("toggle-menu");
})