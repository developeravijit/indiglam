window.addEventListener("DOMContentLoaded", () => {
  // Login Form Validation
  const loginForm = document.querySelector(".loginForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const loginPopup = document.getElementById("login");

  loginForm.noValidate = true;

  // Regex rules
  const emailRegex = /^[^\s@]+@[^\s@]+\.com$/i;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  [email, password].forEach((field) => {
    field.addEventListener("input", () => {
      field.setCustomValidity("");
      field.reportValidity();
    });
  });

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    email.setCustomValidity("");
    password.setCustomValidity("");

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === "") {
      email.setCustomValidity("Please enter your email");
      email.reportValidity();
      email.focus();
      return;
    }

    if (!emailRegex.test(emailValue)) {
      email.setCustomValidity("Email must contain @ and end with .com");
      email.reportValidity();
      email.focus();
      return;
    }

    if (passwordValue === "") {
      password.setCustomValidity("Please enter your password");
      password.reportValidity();
      password.focus();
      return;
    }

    if (!passwordRegex.test(passwordValue)) {
      password.setCustomValidity(
        "Password must contain at least 1 uppercase letter, 1 number, and be at least 6 characters"
      );
      password.reportValidity();
      password.focus();
      return;
    }

    email.setCustomValidity("");
    password.setCustomValidity("");

    loginPopup.classList.add("show");

    setTimeout(() => {
      loginPopup.classList.remove("show");
    }, 2000);

    loginForm.reset();
  });
});
