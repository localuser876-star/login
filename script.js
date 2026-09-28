// ================================
// EMAIL → PASSWORD
// ================================

function goToPassword() {

    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    const error = document.getElementById("email-error");

    // Clear previous error
    error.textContent = "";

    // Check if email is empty
    if (email === "") {

        error.textContent = "Enter an email or phone number.";

        emailInput.focus();

        return;
    }

    // Basic email validation
    if (!isValidEmail(email)) {

        error.textContent = "Enter a valid email address.";

        emailInput.focus();

        return;
    }

    // Put email on password screen
document.getElementById("selected-email").textContent = email;

// Get the first letter of the email
const firstLetter = email.charAt(0).toUpperCase();

// Put the first letter inside the profile circle
document.getElementById("account-initial").textContent = firstLetter;


    // Hide email section
    document.getElementById("email-section").classList.add("hidden");

    // Show password section
    document.getElementById("password-section").classList.remove("hidden");

    // Focus password
    document.getElementById("password").focus();
}


// ================================
// EMAIL VALIDATION
// ================================

function isValidEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);
}


// ================================
// GO BACK TO EMAIL
// ================================

function goBack() {

    document.getElementById("password-section")
        .classList.add("hidden");

    document.getElementById("email-section")
        .classList.remove("hidden");

    document.getElementById("password").value = "";

    document.getElementById("password-error").textContent = "";

    document.getElementById("email").focus();
}


// ================================
// SHOW / HIDE PASSWORD
// ================================

function togglePassword() {

    const password =
        document.getElementById("password");

    const button =
        document.querySelector(".show-password");

    if (password.type === "password") {

        password.type = "text";

        button.textContent = "Hide";

    } else {

        password.type = "password";

        button.textContent = "Show";
    }
}


// ================================
// CHECKBOX PASSWORD VISIBILITY
// ================================

function togglePasswordCheckbox() {

    const password =
        document.getElementById("password");

    const checkbox =
        document.getElementById("showPasswordCheckbox");

    const button =
        document.querySelector(".show-password");

    if (checkbox.checked) {

        password.type = "text";

        button.textContent = "Hide";

    } else {

        password.type = "password";

        button.textContent = "Show";
    }
}


// ================================
// SIGN IN
// ================================

function signIn() {

    const password =
        document.getElementById("password");

    const error =
        document.getElementById("password-error");

    error.textContent = "";

    if (password.value.trim() === "") {

        error.textContent = "Enter your password.";

        password.focus();

        return;
    }

    /*
       This is currently a FRONT-END DEMO.

       We deliberately don't save a real password
       into a text file or localStorage.

       A real application would send the credentials
       to a secure backend for authentication.
    */


    password.value = "";
}


// ================================
// CREATE ACCOUNT
// ================================

function createAccount() {
}


// ================================
// HELP LINKS
// ================================

function showHelp(event) {
    event.preventDefault();
}

