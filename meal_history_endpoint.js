app.get('/api/meal-history/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        // Retrieve meal history for a specific user from the database
        const mealHistory = await db('meal_logs')
            .select('*')
            .where('user_id', userId)
            .orderBy('date_time', 'desc'); 

        res.json(mealHistory); // Respond with the meal history
    } catch (error) {
        console.error('Error fetching meal history:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
