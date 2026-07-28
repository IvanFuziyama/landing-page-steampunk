const menuBtn = document.querySelector(".nav-menu-mobile");
const fecharBtn = document.querySelector(".nav-fechar-mobile");
const navList = document.querySelector(".nav-list-mobile");
const overlay = document.querySelector(".overlay-mobile");
menuBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
    overlay.classList.toggle("active");
});
fecharBtn.addEventListener("click", ()=> {
    navList.classList.remove("active");
    overlay.classList.remove("active");
});