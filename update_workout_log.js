app.put('/api/workout-logs/:log_id', async (req, res) => {
    const logId = req.params.log_id;
    const updatedLogData = req.body;

    try {
        // Update workout log data in the database based on logId
        const updateResult = await db('workout_logs').where('id', logId).update(updatedLogData);

        if (updateResult === 0) {
            return res.status(404).json({ error: 'Workout log not found' });
        }

        res.json({ message: 'Workout log updated successfully' });
    } catch (error) {
        console.error('Error updating workout log:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
