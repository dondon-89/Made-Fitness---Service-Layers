async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('https://made-fitness-b32e8332682c.herokuapp.com//login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        alert('Login successful! Token: ' + data.token);
      } else {
        const errorData = await response.json();
        alert('Login failed. ' + errorData.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login.');
    }
  }
  
