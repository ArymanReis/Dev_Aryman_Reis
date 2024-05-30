const arrowLeft      = document.querySelector("#arrow-left");
const arrowRight     = document.querySelector("#arrow-right");

const techsContainer = document.querySelector("#tech-slide"); 


techsContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    techsContainer.scrollLeft += e.deltaY;
    techsContainer.style.scrollBehavior = "auto";
});


arrowLeft.addEventListener('click', () => {
    techsContainer.style.scrollBehavior = "smooth";
    techsContainer.scrollLeft -= 900;
});

arrowRight.addEventListener('click', () => {
    techsContainer.style.scrollBehavior = "smooth";
    techsContainer.scrollLeft += 900;
});




