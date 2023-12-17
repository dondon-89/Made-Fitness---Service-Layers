app.delete('/api/workout-logs/:log_id', async (req, res) => {
    const logId = req.params.log_id;

    try {
        // Delete workout log data from the database based on logId
        const deleteResult = await db('workout_logs').where('id', logId).del();

        if (deleteResult === 0) {
            return res.status(404).json({ error: 'Workout log not found' });
        }

        res.json({ message: 'Workout log deleted successfully' });
    } catch (error) {
        console.error('Error deleting workout log:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
