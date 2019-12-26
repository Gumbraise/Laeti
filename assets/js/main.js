var cta = document.getElementsByClassName("cta");
var modal = document.getElementsByClassName("div-modal");
var laeti = document.getElementsByTagName("img")[0]
var html = document.getElementsByTagName("html")
var radio = document.getElementsByClassName("radio")
var divradio = document.getElementsByClassName("div-radio")
var formin = document.getElementsByClassName("formin")

window.onload = function() {
    for(var i=0; i<8; i++) {
        formin[i].value = "";
        if (i == 8) {
            i = 1;
        }
    }
}

cta[0].onclick = function() {
    cta[0].style.display = "none"
    cta[1].style.display = "none"
    cta[2].style.display = "none"

    laeti.style = "animation: distransform 1s ease-in-out; transform: rotate(270deg); left: -50%;"
    modal[0].style.display = "block"
    html[0].style.overflow = "visible"
}
cta[1].onclick = function() {
    cta[0].style.display = "none"
    cta[1].style.display = "none"
    cta[2].style.display = "none"

    modal[1].style.display = "block"
}
cta[3].onclick = function() {
    cta[0].style.display = "flex"
    cta[1].style.display = "flex"
    cta[2].style.display = "flex"

    laeti.style = "animation: transform 1s ease-in-out; transform: rotate(360deg); left: -5%;"
    modal[0].style.display = "none"
    html[0].style.overflow = "hidden"
}

radio[0].onclick = function() {
    divradio[0].style.display = "block";
    divradio[1].style.display = "none";

    for(var i=1; i<8; i++) {
        formin[i].value = "";
        if (i == 8) {
            i = 1;
        }
    }
}

radio[1].onclick = function() {
    divradio[1].style.display = "block";
    divradio[0].style.display = "none";
    
    for(var i=1; i<8; i++) {
        formin[i].value = "";
        if (i == 8) {
            i = 1;
        }
    }
}

formin[8].onclick = function() {
    var formData = new FormData();
    formData.set("submit", "TRUE");
    formData.set("pseudo", formin[0].value);
    formData.set("page", formin[1].value);
    formData.set("nom", formin[2].value);
    formData.set("description", formin[3].value);
    formData.set("email", formin[4].value);
    formData.set("description1", formin[5].value);
    formData.set("budjet", formin[6].value);
    formData.set("email1", formin[7].value);

    var request = new XMLHttpRequest();
    request.open('POST', 'actions/submit.php', true);
    request.send(formData);
    request.onreadystatechange = function()
    {
        if (request.readyState === 4) {
            if (request.responseText == "ok") {
                document.write('ok');
            } else  {
                document.write(request.responseText);
            }
        }
    };
}