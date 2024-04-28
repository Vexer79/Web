document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".icon-menu");
    if (menuIcon) {
        const menuBody = document.querySelector(".body-menu");
        menuIcon.addEventListener("click", function (e) {
            menuIcon.classList.toggle("_active");
            menuBody.classList.toggle("_active");
        });
    }
});
