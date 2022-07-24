const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    // 404: "/404.html",
    "/": "/pages/app.html",
    "/about": "/pages/about.html",
    "/contact": "/pages/contact.html",
    "/poll_1" : "/poll_1.html",
    "/poll_2" : "/poll_2.html",
    "/poll_3" : "/poll_3.html",
};
const handleLocation =async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();