const arrowLeft      = document.querySelector("#arrow-left");
const arrowRight     = document.querySelector("#arrow-right");

const techs          = document.querySelectorAll(".tech");
const techsContainer = document.querySelector("#tech-slide");

techsContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    techsContainer.scrollLeft += e.deltaY;
});


arrowLeft.addEventListener('click', () => {
    techsContainer.scrollLeft -= 500;
});

arrowRight.addEventListener('click', () => {
    techsContainer.scrollLeft += 500;
});



