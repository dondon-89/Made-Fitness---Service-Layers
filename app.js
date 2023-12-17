const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'madefitness')));


// Registration endpoint
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await db('users').where('email', email).first();

    if (existingUser) {
      return res.status(400).send('User with this email already exists');
    }

    // Create a new user
    const newUser = { username, email, password };
    await db('users').insert(newUser);

    //send back the user data
    res.json(newUser);
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
})

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard.html'));
})


app.get('/workoutlog', (req, res) => {
  res.sendFile(path.join(__dirname, 'workoutlog.html'));
});

app.get('/workouthistory', (req, res) => {
  res.sendFile(path.join(__dirname, 'workouthistory.html'));
});

app.get('/workout_routines', (req, res) => {
  res.sendFile(path.join(__dirname, 'workout_routines.html'));
});

app.get('/meallog', (req, res) => {
  res.sendFile(path.join(__dirname, 'meallog.html'));
});


app.get('/mealhistory', (req, res) => {
  res.sendFile(path.join(__dirname, 'mealhistory.html'));
});

app.get('/progress', (req, res) => {
  res.sendFile(path.join(__dirname, 'progress.html'));
});


// Handle SIGTERM gracefully
process.on('SIGTERM', () => {
  // Perform cleanup operations here
  console.log('Received SIGTERM. Shutting down gracefully.');
  

  
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


