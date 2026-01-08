// ---------- SIGNUP ----------
const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = nameField.value.trim();
        let email = emailField.value.trim();
        let password = passwordField.value.trim();

        if (name === "" || email === "" || password === "") {
            signupError.innerText = "Name, Email and Password are required!";
            return;
        }

        if (localStorage.getItem(email)) {
            signupError.innerText = "User already exists!";
            return;
        }

        let user = {
            name,
            age: age.value,
            phone: phone.value,
            email,
            address: address.value,
            pincode: pincode.value,
            password
        };

        localStorage.setItem(email, JSON.stringify(user));

        window.location.href = "login.html?user=" + email;
    });
}

// ---------- LOGIN ----------
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    const params = new URLSearchParams(window.location.search);
    let autoUser = params.get("user");
    if (autoUser) {
        loginUser.value = autoUser;
    }

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let input = loginUser.value.trim();
        let pass = loginPassword.value.trim();

        let user = localStorage.getItem(input);

        if (!user) {
            loginError.innerText = "User not found!";
            return;
        }

        user = JSON.parse(user);

        if (user.password !== pass) {
            loginError.innerText = "Incorrect password!";
            return;
        }

        localStorage.setItem("loggedInUser", input);
        window.location.href = "dashboard.html";
    });
}

// ---------- DASHBOARD ----------
const userDataDiv = document.getElementById("userData");

if (userDataDiv) {
    let loggedUser = localStorage.getItem("loggedInUser");

    if (!loggedUser) {
        window.location.href = "login.html";
    }

    let user = JSON.parse(localStorage.getItem(loggedUser));

    userDataDiv.innerHTML = `
        <p><b>Name:</b> ${user.name}</p>
        <p><b>Age:</b> ${user.age}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Address:</b> ${user.address}</p>
        <p><b>Pincode:</b> ${user.pincode}</p>
    `;
}

// ---------- LOGOUT ----------
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

// ---------- DOM Shortcuts ----------
const nameField = document.getElementById("name");
const age = document.getElementById("age");
const phone = document.getElementById("phone");
const emailField = document.getElementById("email");
const address = document.getElementById("address");
const pincode = document.getElementById("pincode");
const passwordField = document.getElementById("password");
const signupError = document.getElementById("signupError");

const loginUser = document.getElementById("loginUser");
const loginPassword = document.getElementById("loginPassword");
const loginError = document.getElementById("loginError");
