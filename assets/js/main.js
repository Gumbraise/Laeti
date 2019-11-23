var cta = document.getElementsByClassName("cta");
var modal = document.getElementsByClassName("div-modal");
var laeti = document.getElementsByTagName("img")[0]
var html = document.getElementsByTagName("html")

cta[0].onclick = function() {
    cta[0].style.display = "none"
    cta[1].style.display = "none"

    laeti.style = "animation: distransform 1s ease-in-out; transform: rotate(270deg); left: -50%;"
    modal[0].style.display = "block"
    html[0].style.overflow = "visible"
}
cta[1].onclick = function() {
    cta[0].style.display = "none"
    cta[1].style.display = "none"

    modal[1].style.display = "block"
}
cta[2].onclick = function() {
    cta[0].style.display = "flex"
    cta[1].style.display = "flex"

    laeti.style = "animation: transform 1s ease-in-out; transform: rotate(360deg); left: -5%;"
    modal[0].style.display = "none"
    html[0].style.overflow = "hidden"
}