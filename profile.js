
/* =========================
   1. GET USER SESSION
========================= */

const loggedInEmail = sessionStorage.getItem("loggedInEmail");

const users = JSON.parse(localStorage.getItem("users")) || [];

const currentUser = users.find(user =>
    user.email === loggedInEmail
);


/* =========================
   2. CHECK USER LOGIN
========================= */

if (!loggedInEmail) {

    window.location.replace("login_page.html");

} else if (!currentUser && loggedInEmail !== "admin@gmail.com") {

    sessionStorage.removeItem("loggedInEmail");

    window.location.replace("login_page.html");

}


/* =========================
   3. DISPLAY PROFILE
========================= */

if (loggedInEmail === "admin@gmail.com" && !currentUser) {

    displayProfile({
        fullname: "Administrator",
        email: loggedInEmail,
        username: "admin"
    });

    document.getElementById("accountType").textContent = "Administrator";

} else if (currentUser) {

    displayProfile(currentUser);

}


/* =========================
   4. PROFILE DISPLAY FUNCTION
========================= */

function displayProfile(user) {

    const firstLetter = user.fullname.charAt(0).toUpperCase();

    document.getElementById("profileAvatar").textContent = firstLetter;

    document.getElementById("profileName").textContent = user.fullname;

    document.getElementById("profileEmail").textContent = user.email;

    document.getElementById("detailName").textContent = user.fullname;

    document.getElementById("detailEmail").textContent = user.email;

    document.getElementById("detailUsername").textContent = user.username;

}


/* =========================
   5. LOGOUT FUNCTION
========================= */

document.getElementById("logoutBtn").addEventListener("click", function() {

    sessionStorage.removeItem("loggedInEmail");

    window.location.replace("login_page.html");

});
