// script.js
document.getElementById('registrationForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  // Fetch form values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Perform registration logic
  try {
    const response = await fetch('https://made-fitness-b32e8332682c.herokuapp.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      // Registration successful, redirect to the login page
      window.location.href = "/login.html";
    } else {
      // Handle registration error, show error message or take appropriate action
      const errorData = await response.json();
      console.error('Registration failed:', errorData.error);
    }
  } catch (error) {
    console.error('Error during registration:', error);
  }
});
  