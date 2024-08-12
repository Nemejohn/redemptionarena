const menu = document.querySelector(".menu");
menu.addEventlistener("click", mainmenu);

function mainmenu() {
    menu.classlist.toggle("active");
    const flex = document.querySelector(".flex");
    flex.classList.toggle("open");
    if(flex.classList.contains("open")){
        flex.style.maxHeight = flex.scrollHeight + "px";
    }
    else{
        flex.removeAttribute("style");
    }
}