const menuBtn = document.querySelector(".nav-menu-mobile");
const navList = document.querySelector(".nav-list-mobile");

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
});