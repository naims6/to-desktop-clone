// For Menubar Code
const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("menulist-mobile");
const overLay = document.getElementById("overlay")
    
let isOpen = false;

function openMenu() {
    isOpen = !isOpen;

    if(isOpen) {
        menuList.classList.remove("hidden");
        overLay.classList.remove("hidden");
        overLay.classList.add('backdrop-blur-sm', 'pointer-events-auto');
        setTimeout(() => {
            menuList.classList.add("opacity-100");
            menuList.classList.remove("opacity-0");
        }, 10)
    } else {
        menuList.classList.add("hidden");
        overLay.classList.remove('backdrop-blur-sm', 'pointer-events-auto');
        menuList.classList.remove("opacity-100");
        menuList.classList.add("opacity-0");
        setTimeout(() => {
            overLay.classList.add("hidden");
        }, 10)
    }
}
menuBtn.addEventListener("click", openMenu)



