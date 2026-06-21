/*
=================================
JavaScript для сайта игры
=================================
*/

// Кнопка трейлера
const trailerBtn = document.getElementById("trailerBtn");

trailerBtn.addEventListener("click", () => {

    alert(
        "Здесь можно открыть трейлер игры или страницу Steam."
    );

});


/*
=================================
Плавное появление секций
=================================
*/

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});
