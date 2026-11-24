document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       1. USER LOGIN STATUS
    ====================================== */

    const loggedInEmail = sessionStorage.getItem("loggedInEmail");

    const loginLink = document.getElementById("loginLink");
    const profileLink = document.getElementById("profileLink");
    const registerLink = document.getElementById("registerLink");

    if (loggedInEmail) {
        if (loginLink) loginLink.hidden = true;
        if (profileLink) profileLink.hidden = false;
        if (registerLink) registerLink.hidden = true;
    } else {
        if (loginLink) loginLink.hidden = false;
        if (profileLink) profileLink.hidden = true;
        if (registerLink) registerLink.hidden = false;
    }


    /* =====================================
       2. MOBILE NAVIGATION
    ====================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {
            navbar.classList.toggle("show");
        });

        document.querySelectorAll(".navbar a").forEach(function (link) {
            link.addEventListener("click", function () {
                navbar.classList.remove("show");
            });
        });
    }


    /* =====================================
       3. ACTIVE NAVIGATION LINK
    ====================================== */

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });

    });


    /* =====================================
       4. HERO AUTOMATIC SLIDESHOW
    ====================================== */

    const slides = document.querySelectorAll(".hero-slideshow .slide");
    const indicators = document.querySelectorAll(".slide-indicators .indicator");

    let currentSlide = 0;
    let slideshowTimer;

    function showSlide(index) {

        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        indicators.forEach(function (indicator) {
            indicator.classList.remove("active");
        });

        slides[index].classList.add("active");

        if (indicators[index]) {
            indicators[index].classList.add("active");
        }
    }

    function nextSlide() {

        if (slides.length === 0) return;

        currentSlide = (currentSlide + 1) % slides.length;

        showSlide(currentSlide);
    }

    if (slides.length > 0) {

        showSlide(currentSlide);

        // Change image every 4 seconds
        slideshowTimer = setInterval(nextSlide, 4000);

    }


    /* =====================================
       5. FOOTER YEAR
    ====================================== */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

});