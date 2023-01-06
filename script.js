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

//routes

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/pages/404.html",
    "/": "/pages/home.html",
    "/menu": "/pages/menu.html",
    "/events": "./pages/events.html",
    "contect": "/pages/contact.html",
};

const handleLocation = async() => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();