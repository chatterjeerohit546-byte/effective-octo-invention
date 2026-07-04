// Show / Hide Password

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.innerHTML =
            '<i class="fa-regular fa-eye-slash"></i>';
    } else {
        password.type = "password";
        togglePassword.innerHTML =
            '<i class="fa-regular fa-eye"></i>';
    }

});

// Login Form Validation

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const adminId = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const passwordValue = password.value.trim();

    if (adminId === "" || email === "" || passwordValue === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Login Successful!");

    // Example:
    // window.location.href = "admin_dashboard.html";

});