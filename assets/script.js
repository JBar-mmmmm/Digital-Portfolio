// Modals
// var busShelter = document.getElementById("busShelter");
// var busShelterModal = busShelter.getElementByClassName("modal");
// var busShelterModalOpen = busShelter.getElementsByTagName("img");
// var busShelterModalClose = busShelterModal.getElementByClassName("closeModal");
// busShelterModalOpen.onclick = function() {
//     busShelterModal.style.display = "block";
// }
// busShelterModalClose.onclick = function() {
//     busShelterModal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == busShelterModal) {
//         busShelterModal.style.display = "none";
//     }
// }

var modal = document.getElementById("modal");
var openModal = document.getElementById("img");
openModal.onclick = function() {
    modal.style.display = "block";
}