const nav = document.querySelector(".nav"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");

const navItems = document.querySelectorAll('.nav-item a');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(link => link.classList.remove('active'));
        item.classList.add('active');
    });
});

navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
});
navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
});