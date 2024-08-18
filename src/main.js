let openBtn = document.querySelector('.bi-list');
let closeBtn = document.querySelector('.bi-x-lg');

let menu = document.querySelector(".navbar__menu");

openBtn.addEventListener("click", () => {
    openBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
    menu.classList.toggle('hidden');
});


closeBtn.addEventListener("click", () => {
    openBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
    menu.classList.toggle('hidden');
});

// testing

let missionContent = document.querySelector(".sectionFourMissionWrapper");
let visionContent = document.querySelector(".sectionFourVisionWrapper");
let programsContent = document.querySelector(".sectionFourProgramsWrapper");
let projectsContent = document.querySelector(".sectionFourProjectsWrapper");


let missionBtn = document.getElementById("btn1");
let visionBtn = document.getElementById("btn2");
let programsBtn = document.getElementById("btn3");
let projectsBtn = document.getElementById("btn4");


missionBtn.addEventListener("click", () => {
    missionContent.style.display = "grid";
    visionContent.style.display = "none";
    programsContent.style.display = "none";
    projectsContent.style.display = "none";
})


visionBtn.addEventListener("click", () => {
    missionContent.style.display = "none";
    visionContent.style.display = "grid";
    programsContent.style.display = "none";
    projectsContent.style.display = "none";
})


programsBtn.addEventListener("click", () => {
    missionContent.style.display = "none";
    visionContent.style.display = "none";
    programsContent.style.display = "grid";
    projectsContent.style.display = "none";
})


projectsBtn.addEventListener("click", () => {
    missionContent.style.display = "none";
    visionContent.style.display = "none";
    programsContent.style.display = "none";
    projectsContent.style.display = "grid";
})



//for gallery
var swiper = new Swiper(".gallery-slider", {

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    loop: true,
    effect: "coverflow",
    slidesPerView: "auto",
    centeredSlides: true,
    grabCursor: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});




ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});


ScrollReveal().reveal('.sectionOne', { delay: 300 });
ScrollReveal().reveal('.section__left, .sectionThree, .sectionTwo', { delay: 300, origin: 'top' });
ScrollReveal().reveal('.sectionOne__right ', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.row ', { delay: 400, origin: 'bottom', interval: 200 });