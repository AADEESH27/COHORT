const container = document.getElementsByClassName("container")[0];
const themeToggle = document.getElementById("theme-toggle");
const signUpButton = document.getElementById("signup-button");
const loginButton = document.getElementById("login-button");
const loginToggle = document.getElementById("login-toggle");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("registration-form");

const baseURL = "http://localhost:3001/auth";

const signUpUser = async (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const username = document.getElementById("userName-signup").value;
  const password = document.getElementById("password-signup").value;
  const payload = {
    name: name,
    username: username,
    password: password,
  };
  await fetch(`${baseURL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

const loginUser = async (event) => {
  event.preventDefault();
  const username = document.getElementById("userName-login").value;
  const password = document.getElementById("password-login").value;
  const payload = {
    username: username,
    password: password,
  };
  const response = await fetch(`${baseURL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  window.localStorage.setItem("token", data.token);
};

const toggleLoginForm = () => {
  loginForm.style.display = "flex";
  signupForm.style.display = "none";
};

const changeTheme = () => {
  if (container.style.backgroundColor == "black") {
    themeToggle.innerText = "🌙 Dark Mode";
    themeToggle.style.color = "black";
    container.style.backgroundColor = "white";
  } else {
    themeToggle.innerText = "🌙 Light Mode";
    themeToggle.style.color = "white";
    container.style.backgroundColor = "black";
  }
};

signUpButton.addEventListener("click", signUpUser);
loginButton.addEventListener("click", loginUser);
loginToggle.addEventListener("click", toggleLoginForm);
themeToggle.addEventListener("click", changeTheme);
