function showLogin() {
  document.getElementById('loginForm').style.display = 'block';
}

function logout() {
  alert('Logging out (simulate backend here)');
  document.getElementById('loginForm').style.display = 'none';
}

function handleLogin(event) {
  event.preventDefault();
  alert('Login logic goes here (connect to backend later)');
}
