const menu = document.querySelector(".header_menu"),
      hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", e => {
    menu.classList.toggle("header_menu_active");
    hamburger.classList.toggle("hamburger_close");
});