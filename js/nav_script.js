const nav = ["Nav1", "Nav2", "Nav3", "Nav4", "Nav5"];
const drop = ["Dropdown1", "Dropdown2", "Dropdown3", "Dropdown4", "Dropdown5"];
const pages = ["Heritage.html", "Nature.html", "Taphouses.html", "Tours.html", "About.html"];

function sawpSubNav(active) {
    for (let i = 0; i < nav.length; i++) {
        if (i == active) {
            if (document.getElementById(nav[i]).classList.contains("highlight")) {
                window.location.href = pages[i];
            }
            /* code by W3schools from: https://www.w3schools.com/jsref/event_onclick.asp  */
            document.getElementById(nav[i]).classList.add("highlight");
            document.getElementById(drop[i]).classList.add("show-sub-nav");
        } else {
            document.getElementById(nav[i]).classList.remove("highlight");
            document.getElementById(drop[i]).classList.remove("show-sub-nav");
        }
    }
}

document.getElementById("Nav1").onclick = function () { sawpSubNav(0) };
document.getElementById("Nav2").onclick = function () { sawpSubNav(1) };
document.getElementById("Nav3").onclick = function () { sawpSubNav(2) };
document.getElementById("Nav4").onclick = function () { sawpSubNav(3) };
document.getElementById("Nav5").onclick = function () { sawpSubNav(4) };

/* code by W3schools from: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp */
window.onscroll = function () { stickyNavFunction() };

var navbar = document.getElementById("full-nav");
var sticky = navbar.offsetTop;

function stickyNavFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}