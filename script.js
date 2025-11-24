const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberCheck = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// CHECK IF USER ALREADY SAVED
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
  existingBtn.style.display = "block";
}

// SUBMIT BUTTON
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const user = usernameInput.value;
  const pass = passwordInput.value;

  alert(`Logged in as ${user}`);

  if (rememberCheck.checked) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
});

// EXISTING USER LOGIN
existingBtn.addEventListener("click", function () {
  alert(`Logged in as ${savedUsername}`);
});
