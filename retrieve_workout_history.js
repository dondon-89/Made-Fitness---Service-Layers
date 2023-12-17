app.get('/api/workout-history/:user_id', async (req, res) => {
    const userId = req.params.user_id;

    try {
        // Fetch workout history for the user from the database
        const workoutHistory = await db('workout_logs')
            .where('user_id', userId)
            .orderBy('date', 'desc'); // Order by date in descending order

        res.json(workoutHistory);
    } catch (error) {
        console.error('Error retrieving workout history:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
