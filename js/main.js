let bars = document.querySelector(".bars");
let nav = document.querySelector("#nav");
let close = document.querySelector(".close");

bars.addEventListener("click", function () {
    nav.classList.add("responsive");
});
close.onclick = function () {
    nav.classList.remove("responsive");
}
document.onkeyup = function (e) {
    if (e.key === "Escape") {
        nav.classList.remove("responsive");
    }
}