// REGISTER
if (document.getElementById("registerForm")) {
    document.getElementById("registerForm").addEventListener("submit", function(e) {
        e.preventDefault();

        let username = document.getElementById("regUser").value;
        let password = document.getElementById("regPass").value;
        let msg = document.getElementById("reg-msg");

        if (username === "" || password === "") {
            msg.textContent = "All fields are required";
            msg.style.color = "red";
            return;
        }

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        msg.textContent = "Registration successful! Go to login.";
        msg.style.color = "green";
    });
}

// LOGIN
if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault();

        let username = document.getElementById("loginUser").value;
        let password = document.getElementById("loginPass").value;
        let msg = document.getElementById("login-msg");

        let storedUser = localStorage.getItem("username");
        let storedPass = localStorage.getItem("password");

        if (username === storedUser && password === storedPass) {
            msg.textContent = "Login Successful!";
            msg.style.color = "green";
        } else {
            msg.textContent = "Invalid Username or Password";
            msg.style.color = "red";
        }
    });
}
