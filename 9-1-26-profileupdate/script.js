/* -----------------------------
   DEFAULT USER DATA (ONLY ONCE)
-------------------------------- */
if (!localStorage.getItem("loggedInUser")) {
  localStorage.setItem("loggedInUser", JSON.stringify({
    name: "Gouri Patil",
    email: "gouri@gmail.com",
    phone: "9876543210",
    address: "Pune, Maharashtra",
    password: "12345"
  }));
}

/* -----------------------------
   ROUTE PROTECTION
-------------------------------- */
let user = JSON.parse(localStorage.getItem("loggedInUser"));

if (!user) {
  alert("Please login first");
  window.location.href = "login.html";
}

/* -----------------------------
   VIEW ELEMENTS
-------------------------------- */
const vName = document.getElementById("vName");
const vEmail = document.getElementById("vEmail");
const vPhone = document.getElementById("vPhone");
const vAddress = document.getElementById("vAddress");

/* -----------------------------
   EDIT ELEMENTS
-------------------------------- */
const eName = document.getElementById("eName");
const eEmail = document.getElementById("eEmail");
const ePhone = document.getElementById("ePhone");
const eAddress = document.getElementById("eAddress");

const viewMode = document.getElementById("viewMode");
const editMode = document.getElementById("editMode");

/* -----------------------------
   LOAD USER DATA
-------------------------------- */
function loadUser() {
  vName.innerText = user.name;
  vEmail.innerText = user.email;
  vPhone.innerText = user.phone;
  vAddress.innerText = user.address;
}
loadUser();

/* -----------------------------
   ENABLE EDIT MODE
-------------------------------- */
function enableEdit() {
  viewMode.classList.add("hidden");
  editMode.classList.remove("hidden");

  eName.value = user.name;
  eEmail.value = user.email;
  ePhone.value = user.phone;
  eAddress.value = user.address;
}

/* -----------------------------
   SAVE UPDATED DATA
-------------------------------- */
function saveChanges() {
  user.name = eName.value;
  user.email = eEmail.value;
  user.phone = ePhone.value;
  user.address = eAddress.value;

  localStorage.setItem("loggedInUser", JSON.stringify(user));

  loadUser();
  editMode.classList.add("hidden");
  viewMode.classList.remove("hidden");
}

/* -----------------------------
   PASSWORD MODAL
-------------------------------- */
const passwordModal = document.getElementById("passwordModal");

function openPasswordModal() {
  passwordModal.classList.remove("hidden");
}

function closePasswordModal() {
  passwordModal.classList.add("hidden");
}

/* -----------------------------
   CHANGE PASSWORD
-------------------------------- */
function changePassword() {
  let newPass = document.getElementById("newPassword").value;
  let confirmPass = document.getElementById("confirmPassword").value;
  let checked = document.getElementById("confirmCheck").checked;

  if (!checked) {
    alert("Please confirm password change");
    return;
  }

  if (newPass === "" || confirmPass === "") {
    alert("Password cannot be empty");
    return;
  }

  if (newPass !== confirmPass) {
    alert("Passwords do not match");
    return;
  }

  user.password = newPass;
  localStorage.setItem("loggedInUser", JSON.stringify(user));

  alert("Password changed successfully");
  closePasswordModal();
}
