// NavBar

const burger = document.querySelector(".burger")
// Make a copy of Menu
const menuMobile = document.querySelector("#menu").cloneNode(true)
// je CHANGE l'attribut id de la copie (#menu -> #menu-mobile)
menuMobile.setAttribute("id", "menu-mobile")

let closeBtn = document.createElement("span")
closeBtn.innerHTML = "&#11205;"
closeBtn.classList.add("close-btn")
menuMobile.prepend(closeBtn)

closeBtn.addEventListener("click", function(){
    menuMobile.remove()
    burger.style.visibility = "visible"
})

menuMobile.addEventListener("click", function(event){
    if(event.target == this)//si l'évenement a pour cible la nav ELLE-MEME, c'est OK
        menuMobile.remove()
})

burger.addEventListener("click", function(){
    document.querySelector("body").prepend(menuMobile)
    burger.style.visibility = "hidden"
})

window.addEventListener('resize', function(){
    if(window.innerWidth >= 820){
        menuMobile.remove()
    }
});