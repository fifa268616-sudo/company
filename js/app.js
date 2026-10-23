const navbtn = document.querySelector(".mobile-mune")
const navmenu = document.querySelector(".mobile-list")
let navopen = false;
navbtn.addEventListener("click" , function () {
    if (navopen) {
        navbtn.classList.remove("mobile-mune--open")
        navmenu.classList.remove("mobile-list--open")
        navopen = false
    } else{
        navbtn.classList.add("mobile-mune--open")
        navmenu.classList.add("mobile-list--open")
        navopen = true
    }
})
