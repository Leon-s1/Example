var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
// Модальное окно закрывается по клику на любую область кроме него самого.
if (event.target == modal) {
// Модальное окно закрывается по крестику.
  // if (event.target !== modal) {
    modal.style.display = "none";

// Модальное окно закрывается по крестику.
    // modal.focus();
  }
}
