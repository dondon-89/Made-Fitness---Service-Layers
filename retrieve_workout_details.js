app.get('/api/workout-history/:log_id/details', async (req, res) => {
    const logId = req.params.log_id;

    try {
        // Fetch workout log details from the database based on logId
        const workoutDetails = await db('workout_logs').where('id', logId).first();

        if (!workoutDetails) {
            return res.status(404).json({ error: 'Workout log not found' });
        }

        res.json(workoutDetails);
    } catch (error) {
        console.error('Error retrieving workout details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
