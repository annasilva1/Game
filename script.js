function menuShow() {
    let menu = document.querySelector("#menu-icon");
    const icon = menu.querySelector("#icon-menu");

    if (icon.classList.contains("bx-menu")) {
        icon.classList.remove("bx-menu");
        icon.classList.add("bx-x");
    } else {
        icon.classList.remove("bx-x");
        icon.classList.add("bx-menu");
    }

    let mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.toggle("open");
}
