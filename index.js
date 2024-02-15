const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// Simulated registered user data (Replace this with your actual user data)
const registeredUsers = [
    { username: "izabela.tavares", password: "tlpeIT" },
    { username: "pablo.carvalho", password: "tlpePC" },
    { username: "thayna.camila", password: "tlpeTC" },
    { username: "renan.duarte", password: "tlpeRD" }
];

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Check if the input username and password match any registered user
    const user = registeredUsers.find(u => u.username === username && u.password === password);

    if (user) {
        // If the credentials are valid, redirect to home.html
        window.location.href = "./home.html";
    } else {
        // Otherwise, make the login error message show (change its opacity)
        loginErrorMsg.style.opacity = 1;
    }
});
