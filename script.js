// Hardcoded credentials (for demo only)
const validUsername = "admin"
const validPassword = "123"

// Get DOM elements
const loginScreen = document.getElementById("login-screen");
const portfolio = document.getElementById("portfolio");

// Check login state on load
window.onload = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    showPortfolio();
  } else {
    showLogin();
  }
};

// Login function
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === validUsername && password === validPassword) {
    localStorage.setItem("isLoggedIn", "true");
    showPortfolio();
  } else {
    alert("Invalid username or password!");
  }
}

// Logout function
function logout() {
  localStorage.removeItem("isLoggedIn");
  showLogin();
}

// Show portfolio and hide login
function showPortfolio() {
  loginScreen.style.display = "none";
  portfolio.style.display = "block";
}

// Show login and hide portfolio
function showLogin() {
  loginScreen.style.display = "flex";
  portfolio.style.display = "none";
}
