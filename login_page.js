
/* =========================
   1. GET HTML ELEMENTS
========================= */

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");


/* =========================
   2. LOGIN FUNCTION
========================= */

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const adminEmail = "admin@gmail.com";
    const adminPassword = "123";

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const isAdmin =
        email === adminEmail &&
        password === adminPassword;

    const user = users.find(account =>
        account.email === email &&
        account.password === password
    );

    if (isAdmin || user) {

        message.textContent = "✓ Login successful!";
        message.className = "message success";

        sessionStorage.setItem("loggedInEmail", email);

        setTimeout(function() {
            window.location.href = "index.html";
        }, 1500);

    } else {

        message.textContent = "✕ Invalid email or password.";
        message.className = "message error";

    }

});
