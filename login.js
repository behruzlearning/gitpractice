```javascript
const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");
const message = document.getElementById("message");

togglePassword.addEventListener("click", () => {
    const isPasswordHidden = passwordInput.type === "password";

    passwordInput.type = isPasswordHidden ? "text" : "password";
    togglePassword.textContent = isPasswordHidden ? "Hide" : "Show";
});

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        message.textContent = "Please fill in all fields.";
        message.style.color = "#d94c4c";
        return;
    }

    message.textContent =
        "Login page is working! Authentication will be added later.";
    message.style.color = "#21865b";
});
```
