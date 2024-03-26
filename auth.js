// Get the "Log in" button element
const loginBtn = document.getElementById('login-btn');

// Add an event listener to the "Log in" button
loginBtn.addEventListener('click', () => {
  // Open a new tab with the authentication forms
  window.open('auth.html', '_blank');
});