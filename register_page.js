
/* =========================
   1. GET HTML ELEMENTS
========================= */

const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");


/* =========================
   2. REGISTRATION FUNCTION
========================= */

registerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get input values
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Get existing accounts
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check existing email
    const existingEmail = users.some(user => user.email === email);

    if (existingEmail) {
        showMessage("Email is already registered!", "red");
        return;
    }

    // Check existing username
    const existingUsername = users.some(user => user.username === username);

    if (existingUsername) {
        showMessage("Username is already taken!", "red");
        return;
    }

    // Check password length
    if (password.length < 8) {
        showMessage("Password must be at least 8 characters!", "red");
        return;
    }

    // Check password confirmation
    if (password !== confirmPassword) {
        showMessage("Passwords do not match!", "red");
        return;
    }

    // Create new account
    const newUser = {
        fullname: fullname,
        email: email,
        username: username,
        password: password
    };

    // Save account
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");

    // Redirect to login page
    window.location.href = "login_page.html";

});


/* =========================
   3. DISPLAY MESSAGE
========================= */

function showMessage(text, color) {

    message.textContent = text;
    message.style.color = color;

}
