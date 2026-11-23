document.addEventListener("DOMContentLoaded", function () {

    // Check if a user is logged in
    const loggedInEmail = sessionStorage.getItem("loggedInEmail");

    const loginLink = document.getElementById("loginLink");
    const profileLink = document.getElementById("profileLink");
    const registerLink = document.getElementById("registerLink");

    // Display the correct account links
    if (loggedInEmail) {
        loginLink.hidden = true;
        profileLink.hidden = false;
        registerLink.hidden = true;
    } else {
        loginLink.hidden = false;
        profileLink.hidden = true;
        registerLink.hidden = false;
    }

    // Mobile navigation toggle
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("show");
    });

    // Close mobile navigation after clicking a link
    document.querySelectorAll(".navbar a").forEach(function (link) {
        link.addEventListener("click", function () {
            navbar.classList.remove("show");
        });
    });

    // Highlight active navigation link
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });
    });

    // Automatically update footer year
    document.getElementById("currentYear").textContent =
        new Date().getFullYear();

});