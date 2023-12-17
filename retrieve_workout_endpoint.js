app.get('/api/workout-logs/:user_id', async (req, res) => {
    const userId = req.params.user_id;

    try {
        // Fetch all workout logs for the user from the database
        const workoutLogs = await db('workout_logs').where('user_id', userId);

        res.json(workoutLogs);
    } catch (error) {
        console.error('Error retrieving workout logs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
