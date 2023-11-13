Introduction

Welcome to the Made Fitness Service Layer! This layer serves as the backbone of my health and fitness application, providing essential functionalities such as user management, workout tracking, and nutrition planning. It acts as the bridge between the user interface and the underlying database, ensuring seamless data flow and processing.

Features

User Management: Handle user registration, authentication, and profile management.

Workout Tracking: Process and store workout data, enabling users to track their fitness activities.

Nutrition Planning: Manage meal logs and nutritional information for effective diet planning.

Workout Guidance: Generate personalized workout routines based on user profiles and goals.

Architecture

The service layer follows a microservices architecture, allowing for scalability, maintainability, and flexibility. It comprises modules for user management, workout tracking, nutrition planning, and workout guidance, each responsible for specific functionalities.

API Endpoints

User Management:
POST /api/users/register: Register a new user.
POST /api/users/login: Authenticate and log in a user.
GET /api/users/:user_id: Retrieve user profile information.
PUT /api/users/:user_id: Update user profile information.
DELETE /api/users/:user_id: Delete user profile.

Workout Tracking:
POST /api/workouts/log: Log a new workout.
GET /api/workouts/:user_id: Retrieve a user's workout history.

Nutrition Planning:
POST /api/meals/log: Log a new meal.
GET /api/meals/:user_id: Retrieve a user's meal logs.

Workout Guidance:
GET /api/workoutroutines: Retrieve a list of available workout routines.
GET /api/workoutroutines/:routine_id: Retrieve details of a specific workout routine.
