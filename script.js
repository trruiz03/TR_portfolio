function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}



var popup = document.getElementById("popUp");
var modal = document.getElementById("myModal");
var exit = document.getElementById("closePopup");
//var span = document.getElementsByClassName("close")[0];

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
        popup.classList.remove("open-popup");
}



