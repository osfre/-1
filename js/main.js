let btn = document.querySelector(".menu-icon");
let spans = document.querySelectorAll("span");
let ulElement = document.querySelector("#navbarSupportedContent")
let links = document.querySelectorAll("ul a")
let close_nav = document.querySelector(".close-nav")


btn.onclick = function () {
    ulElement.classList.add("show1");
}
close_nav.onclick = () => {
    ulElement.classList.remove("show1");
}
links.forEach(link => {
    link.onclick = function () {
        ulElement.classList.remove('show1');
    }
    
});