// Modals
// based on https://www.w3schools.com/howto/howto_css_modals.asp

document.getElementById("busShelterOpenModal").onclick = function() {
    document.getElementById("busShelterModal").style.display = "block";
}
document.getElementById("busShelterCloseModal").onclick = function() {
    document.getElementById("busShelterModal").style.display = "none";
}
window.onclick = function(event) {
    if (event.target == document.getElementById("busShelterModal")) {
        document.getElementById("busShelterModal").style.display = "none";
    }
}

