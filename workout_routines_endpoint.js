app.get('/api/workout-routine/:routineId', async (req, res) => {
    const routineId = req.params.routineId;

    try {
        // Retrieve workout routine details from the database
        const routineDetails = await db('workout_routines')
            .select('*')
            .where('routine_id', routineId)
            .first();

        if (!routineDetails) {
            return res.status(404).json({ error: 'Workout routine not found' });
        }

        res.json(routineDetails); // Respond with the workout routine details
    } catch (error) {
        console.error('Error fetching workout routine details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
