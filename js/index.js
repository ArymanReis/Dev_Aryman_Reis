const arrowLeft          = document.querySelector("#arrow-left");
const arrowRight         = document.querySelector("#arrow-right");
const arrowLeftProject   = document.querySelector("#arrow-left-project");
const arrowRightProject  = document.querySelector("#arrow-right-project");

const techsContainer     = document.querySelector("#tech-slide"); 
const cardsContainer     = document.querySelector("#cards-container"); 


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

cardsContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    cardsContainer.scrollLeft += e.deltaY;
    cardsContainer.style.scrollBehavior = "auto";
});


arrowLeftProject.addEventListener('click', () => {
    cardsContainer.style.scrollBehavior = "smooth";
    cardsContainer.scrollLeft -= 900;
});

arrowRightProject.addEventListener('click', () => {
    cardsContainer.style.scrollBehavior = "smooth";
    cardsContainer.scrollLeft += 900;
});




