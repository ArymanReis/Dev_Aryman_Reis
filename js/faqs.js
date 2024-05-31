const btnOpen  = document.querySelectorAll(".open");
const btnClose = document.querySelectorAll(".close");

const response = document.querySelectorAll(".response");

for (let i = 0; i < btnOpen.length; i++) {
    btnOpen[i].addEventListener("click", function() {
        btnOpen[i].classList.toggle("hidden");
        btnClose[i].classList.toggle("hidden");
        response[i].classList.toggle("hidden");
    });
}

for (let i = 0; i < btnClose.length; i++) {
    btnClose[i].addEventListener("click", function() {
        btnOpen[i].classList.toggle("hidden");
        btnClose[i].classList.toggle("hidden");
        response[i].classList.toggle("hidden");
    });
}

