// Modals
// based on https://www.w3schools.com/howto/howto_css_modals.asp & https://jsfiddle.net/0x0049/koodkcng/1/
document.getElementById("busShelterOpenModal").onclick = function() {
    document.getElementById("busShelterModal").style.display = "block";
    var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    document.body.style.margin = "0px " + scrollBarWidth +"px 0px 0px";
    document.body.style.overflow = "hidden";
    document.getElementById("busShelterModal").style.zIndex = "2";
}
document.getElementById("busShelterCloseModal").onclick = function() {
    document.getElementById("busShelterModal").style.display = "none";
    document.body.style.margin = "";
    document.body.style.overflow = "";
}


document.getElementById("exposedToTheElementsOpenModal").onclick = function() {
    document.getElementById("exposedToTheElementsModal").style.display = "block";
    var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    document.body.style.margin = "0px " + scrollBarWidth +"px 0px 0px";
    document.body.style.overflow = "hidden";
}
document.getElementById("exposedToTheElementsCloseModal").onclick = function() {
    document.getElementById("exposedToTheElementsModal").style.display = "none";
    document.body.style.margin = "";
    document.body.style.overflow = "";
}


document.getElementById("speakerOpenModal").onclick = function() {
    document.getElementById("speakerModal").style.display = "block";
    var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    document.body.style.margin = "0px " + scrollBarWidth +"px 0px 0px";
    document.body.style.overflow = "hidden";
}
document.getElementById("speakerCloseModal").onclick = function() {
    document.getElementById("speakerModal").style.display = "none";
    document.body.style.margin = "";
    document.body.style.overflow = "";
}


document.getElementById("bodilyAdornmentOpenModal").onclick = function() {
    document.getElementById("bodilyAdornmentModal").style.display = "block";
    var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    document.body.style.margin = "0px " + scrollBarWidth +"px 0px 0px";
    document.body.style.overflow = "hidden";
}
document.getElementById("bodilyAdornmentCloseModal").onclick = function() {
    document.getElementById("bodilyAdornmentModal").style.display = "none";
    document.body.style.margin = "";
    document.body.style.overflow = "";
}


document.getElementById("a7XtendedOpenModal").onclick = function() {
    document.getElementById("a7XtendedModal").style.display = "block";
    var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    document.body.style.margin = "0px " + scrollBarWidth +"px 0px 0px";
    document.body.style.overflow = "hidden";
}
document.getElementById("a7XtendedCloseModal").onclick = function() {
    document.getElementById("a7XtendedModal").style.display = "none";
    document.body.style.margin = "";
    document.body.style.overflow = "";
}


document.getElementById("catapultOpenModal").onclick = function() {
    document.getElementById("catapultModal").style.display = "block";
    var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    document.body.style.margin = "0px " + scrollBarWidth +"px 0px 0px";
    document.body.style.overflow = "hidden";
}
document.getElementById("catapultCloseModal").onclick = function() {
    document.getElementById("catapultModal").style.display = "none";
    document.body.style.margin = "";
    document.body.style.overflow = "";
}


document.getElementById("eCargoScooterOpenModal").onclick = function() {
    document.getElementById("eCargoScooterModal").style.display = "block";
    var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    document.body.style.margin = "0px " + scrollBarWidth +"px 0px 0px";
    document.body.style.overflow = "hidden";
}
document.getElementById("eCargoScooterCloseModal").onclick = function() {
    document.getElementById("eCargoScooterModal").style.display = "none";
    document.body.style.margin = "";
    document.body.style.overflow = "";
}


document.getElementById("kitchenTimerOpenModal").onclick = function() {
    document.getElementById("kitchenTimerModal").style.display = "block";
    var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    document.body.style.margin = "0px " + scrollBarWidth +"px 0px 0px";
    document.body.style.overflow = "hidden";
}
document.getElementById("kitchenTimerCloseModal").onclick = function() {
    document.getElementById("kitchenTimerModal").style.display = "none";
    document.body.style.margin = "";
    document.body.style.overflow = "";
}


document.getElementById("shoeOpenModal").onclick = function() {
    document.getElementById("shoeModal").style.display = "block";
    var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    document.body.style.margin = "0px " + scrollBarWidth +"px 0px 0px";
    document.body.style.overflow = "hidden";
}
document.getElementById("shoeCloseModal").onclick = function() {
    document.getElementById("shoeModal").style.display = "none";
    document.body.style.margin = "";
    document.body.style.overflow = "";
}


document.getElementById("superjacentOpenModal").onclick = function() {
    document.getElementById("superjacentModal").style.display = "block";
    var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    document.body.style.margin = "0px " + scrollBarWidth +"px 0px 0px";
    document.body.style.overflow = "hidden";
}
document.getElementById("superjacentCloseModal").onclick = function() {
    document.getElementById("superjacentModal").style.display = "none";
    document.body.style.margin = "";
    document.body.style.overflow = "";
}


document.getElementById("newPowerOpenModal").onclick = function() {
    document.getElementById("newPowerModal").style.display = "block";
    var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    document.body.style.margin = "0px " + scrollBarWidth +"px 0px 0px";
    document.body.style.overflow = "hidden";
}
document.getElementById("newPowerCloseModal").onclick = function() {
    document.getElementById("newPowerModal").style.display = "none";
    document.body.style.margin = "";
    document.body.style.overflow = "";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("busShelterModal")) {
        document.getElementById("busShelterModal").style.display = "none";
        document.body.style.margin = "";
        document.body.style.overflow = "";
        console.log("clicked");
    } else if (event.target == document.getElementById("exposedToTheElementsModal")) {
        document.getElementById("exposedToTheElementsModal").style.display = "none";
        document.body.style.margin = "";
        document.body.style.overflow = "";
    } else if (event.target == document.getElementById("speakerModal")) {
        document.getElementById("speakerModal").style.display = "none";
        document.body.style.margin = "";
        document.body.style.overflow = "";
    } else if (event.target == document.getElementById("bodilyAdornmentModal")) {
        document.getElementById("bodilyAdornmentModal").style.display = "none";
        document.body.style.margin = "";
        document.body.style.overflow = "";
    } else if (event.target == document.getElementById("a7XtendedModal")) {
        document.getElementById("a7XtendedModal").style.display = "none";
        document.body.style.margin = "";
        document.body.style.overflow = "";
    } else if (event.target == document.getElementById("catapultModal")) {
        document.getElementById("catapultModal").style.display = "none";
        document.body.style.margin = "";
        document.body.style.overflow = "";
    } else if (event.target == document.getElementById("eCargoScooterModal")) {
        document.getElementById("eCargoScooterModal").style.display = "none";
        document.body.style.margin = "";
        document.body.style.overflow = "";
    } else if (event.target == document.getElementById("kitchenTimerModal")) {
        document.getElementById("kitchenTimerModal").style.display = "none";
        document.body.style.margin = "";
        document.body.style.overflow = "";
    } else if (event.target == document.getElementById("shoeModal")) {
        document.getElementById("shoeModal").style.display = "none";
        document.body.style.margin = "";
        document.body.style.overflow = "";
    } else if (event.target == document.getElementById("superjacentModal")) {
        document.getElementById("superjacentModal").style.display = "none";
        document.body.style.margin = "";
        document.body.style.overflow = "";
    } else if (event.target == document.getElementById("newPowerModal")) {
        document.getElementById("newPowerModal").style.display = "none";
        document.body.style.margin = "";
        document.body.style.overflow = "";
    }
}