app.post('/api/workout-logs', async (req, res) => {
    const workoutLogData = req.body;

    try {
        
        const newWorkoutLog = await db('workout_logs').insert(workoutLogData).returning('*');

        res.json(newWorkoutLog[0]);
    } catch (error) {
        console.error('Error creating workout log:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
