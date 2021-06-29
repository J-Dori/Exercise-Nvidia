// NavBar

const burger = document.querySelector(".burger")
// Make a copy of Menu
const menuMobile = document.querySelector("#menu").cloneNode(true)
// changing attribut id of the new copy (#menu -> #menu-mobile)
menuMobile.setAttribute("id", "menu-mobile")


let closeBtn = document.createElement("span")
closeBtn.innerHTML = "&#11205;"
closeBtn.classList.add("close-btn")
menuMobile.prepend(closeBtn)

closeBtn.addEventListener("click", function(){
    fadeOut()
})

menuMobile.addEventListener("click", function(event){
    if(event.target == this)//si l'évenement a pour cible la nav ELLE-MEME, c'est OK
        fadeOut()
})

burger.addEventListener("click", function(){
    document.querySelector("body").prepend(menuMobile)
    const fadeTarget = document.querySelector("#menu-mobile");
    fadeTarget.style.opacity = 1
    burger.style.visibility = "hidden"
})

window.addEventListener('resize', function(){
    if(window.innerWidth >= 820){
        menuMobile.remove()
    }
});

function fadeOut() {
    var fadeTarget = document.getElementById("menu-mobile");
    var fadeEffect = setInterval(function () {
        
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.05;
        } else {
            clearInterval(fadeEffect);
        }
    }, 100);
    menuMobile.remove()
    burger.style.visibility = "visible"
}