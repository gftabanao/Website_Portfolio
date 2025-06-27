function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === "admin" && password === "1234") {
    document.getElementById('login-screen').style.display = "none";
    document.getElementById('portfolio').style.display = "block";
  } else {
    alert("Incorrect username or password.");
  }
}

function logout() {
  document.getElementById('login-screen').style.display = "flex";
  document.getElementById('portfolio').style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
  });
});
