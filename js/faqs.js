const btnOpen  = document.querySelector(".open");
const btnClose = document.querySelector(".close");

const response = document.querySelector(".response");


btnOpen.addEventListener('click', function() {

    response.style.display = 'block';
    btnClose.style.display = 'block';
    btnOpen.style.display = 'none';
});

btnClose.addEventListener('click', function() {

    response.style.display = 'none';
    btnOpen.style.display = 'block';
    btnClose.style.display = 'none';
});


