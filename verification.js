function togglePassword() {
      const passwordInput = document.getElementById("password");
      const toggleText = document.querySelector(".toggle");

      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleText.textContent = "Hide";
      } else {
        passwordInput.type = "password";
        toggleText.textContent = "Show";
      }
    }
           const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // stop normal form submit

      if (loginForm.checkValidity()) {
        // Redirect if all fields are valid
        window.location.href = 'Home Page.html';
      } else {
        // Show validation error
        loginForm.reportValidity();
      }
    });