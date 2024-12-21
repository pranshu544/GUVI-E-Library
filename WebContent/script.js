document.addEventListener("DOMContentLoaded", function () {
    const forms = [
        {
            form: document.getElementById("adminForm"),
            emailInput: document.getElementById("adminEmail"),
            passwordInput: document.getElementById("adminPassword"),
            togglePassword: document.getElementById("toggleAdminPassword"),
            emailError: document.getElementById("adminEmailError"),
            passwordError: document.getElementById("adminPasswordError"),
        },
        {
            form: document.getElementById("librarianForm"),
            emailInput: document.getElementById("librarianEmail"),
            passwordInput: document.getElementById("librarianPassword"),
            togglePassword: document.getElementById("toggleLibrarianPassword"),
            emailError: document.getElementById("librarianEmailError"),
            passwordError: document.getElementById("librarianPasswordError"),
        }
    ];

    forms.forEach(({ form, emailInput, passwordInput, togglePassword, emailError, passwordError }) => {
        form.addEventListener("submit", function (event) {
            let valid = true;

            if (!emailInput.value.trim()) {
                valid = false;
                emailError.textContent = "Email is required.";
                emailInput.classList.add("input-error");
            } else {
                emailError.textContent = "";
                emailInput.classList.remove("input-error");
            }

            if (!passwordInput.value.trim()) {
                valid = false;
                passwordError.textContent = "Password is required.";
                passwordInput.classList.add("input-error");
            } else {
                passwordError.textContent = "";
                passwordInput.classList.remove("input-error");
            }

            if (!valid) event.preventDefault();
        });

        togglePassword.addEventListener("click", function () {
            const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
            passwordInput.setAttribute("type", type);
            togglePassword.textContent = type === "password" ? "Show Password" : "Hide Password";
        });
    });
});
