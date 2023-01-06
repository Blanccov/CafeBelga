// navbar sticky

var nav = document.getElementById("nav")
var navmenu = document.getElementById("navmenu")

window.onscroll = function(){
    if(window.pageYOffset >= navmenu.offsetTop){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
}